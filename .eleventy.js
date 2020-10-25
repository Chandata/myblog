const util = require('util');
const algoliasearch = require('algoliasearch');
const searchClient = algoliasearch('51067V6I2P','f6f1406a18455de11279793f8a952a58')
const algoliaIndex = searchClient.initIndex('blog');


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
// search config, only searching for all files that ends in .md
eleventyConfig.addCollection('algolia', collection => {
  const index = collection.getAll().filter(item => {
    let extension = item.inputPath.split('.').pop();
    return extension === 'md';
  }).map(item => {
    return {
      objectID: item.data.page.url,
      title: item.data.title,
      author: item.data.author,
      description: item.data.description,
      url: item.data.page.url,
      content: JSON.stringify(item.template.frontMatter.content)
    }
  });
  return algoliaIndex.saveObjects(index);
})
};
