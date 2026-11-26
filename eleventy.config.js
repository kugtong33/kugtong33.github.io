export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site/assets");

  return {
    dir: {
      input: "site",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
