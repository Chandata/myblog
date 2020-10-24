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
  eleventyConfig.addFilter('formatDate', value => {
    const ISOcode = 'en-GB';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(value);
    return `${d.toLocaleDateString(ISOcode, options)}`;
  })
};
