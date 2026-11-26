import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { test } from "node:test";
import { parse } from "parse5";

const output = new URL("../_site/", import.meta.url);
const origin = "https://kugtong33.github.io";
const htmlFiles = ["index.html", "404.html"];
const pages = new Map(await Promise.all(htmlFiles.map(async (file) => [
  file,
  parse(await readFile(new URL(file, output), "utf8")),
])));

function elements(node) {
  return [
    ...(node.tagName ? [node] : []),
    ...(node.childNodes ?? []).flatMap(elements),
  ];
}

function attr(node, name) {
  return node.attrs?.find((attribute) => attribute.name === name)?.value;
}

function text(node) {
  if (node.tagName === "br") return " ";
  return node.value ?? (node.childNodes ?? []).map(text).join("");
}

test("the homepage identifies Arjay and links to the four selected public labs", () => {
  const nodes = elements(pages.get("index.html"));
  const headings = nodes.filter((node) => node.tagName === "h1");
  assert.deepEqual(headings.map(text), ["Arjay Sitoy."]);
  const canonical = nodes.find((node) => attr(node, "rel") === "canonical");
  assert.equal(attr(canonical, "href"), `${origin}/`);
  const repos = nodes.filter((node) => attr(node, "class") === "project-link");
  assert.deepEqual(repos.map((node) => attr(node, "href")), [
    "https://github.com/kugtong33/labs-kube-autoscaling",
    "https://github.com/kugtong33/labs-aws-profiler",
    "https://github.com/kugtong33/labs-local-llm",
    "https://github.com/kugtong33/labs-wikirag",
  ]);
});

test("published local links, assets, and fragment IDs resolve", async () => {
  for (const [file, document] of pages) {
    const nodes = elements(document);
    const ids = nodes.map((node) => attr(node, "id")).filter(Boolean);
    assert.equal(new Set(ids).size, ids.length, `${file} has duplicate IDs`);
    for (const node of nodes) {
      const target = attr(node, "href") ?? attr(node, "src");
      if (!target) continue;

      const url = new URL(target, `${origin}/${file === "index.html" ? "" : file}`);
      if (url.origin !== origin) {
        assert.equal(url.protocol, "https:", `${target} must use HTTPS`);
        continue;
      }
      const path = url.pathname.slice(1) + (url.pathname.endsWith("/") ? "index.html" : "");
      await assert.doesNotReject(access(new URL(path, output)), `${target} does not exist`);
      if (url.hash) {
        const destination = pages.get(path);
        assert.ok(
          destination && elements(destination).some((el) => attr(el, "id") === decodeURIComponent(url.hash.slice(1))),
          `${target} has no fragment target`,
        );
      }
    }
  }
});

test("the deployment artifact only contains the public site, with no client scripts", async () => {
  assert.deepEqual((await readdir(output)).sort(), ["404.html", "assets", "index.html"]);
  for (const [file, document] of pages) {
    const nodes = elements(document);
    assert.ok(!nodes.some((node) => node.tagName === "script"), `${file} ships a script`);
    assert.equal(nodes.filter((node) => node.tagName === "main").length, 1);
  }

  const notFound = elements(pages.get("404.html"));
  assert.ok(notFound.some((node) => attr(node, "name") === "robots" && attr(node, "content") === "noindex"));
  assert.ok(notFound.some((node) => node.tagName === "a" && attr(node, "href") === "/"));
  const css = await readFile(new URL("assets/site.css", output), "utf8");
  for (const [, path] of css.matchAll(/url\("([^"]+)"\)/g)) {
    await access(new URL(`assets/${path}`, output));
  }
});
