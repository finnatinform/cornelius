// nextjs plugins
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

// make it easier
const withPlugins = require('next-compose-plugins');

// next.config.js
module.exports = withPlugins([withTypescript, withCSS], {
  distDir: './../dist/.next'
});
