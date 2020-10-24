<<<<<<< HEAD
const util = require('util');

module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("vendor");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj);
  });
};
=======
const util = require('util');

module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("vendor");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj);
  });
};
>>>>>>> 4c2c3cd119b320319c5e9b8096e0bdf9f6dab385
