/*
 *  Webpack Middlewares
 *  ===================
 *
 *  Configures Webpack Middlewares for use with Browsersync.
 */

const devMiddleware = require('webpack-dev-middleware');
const { createFsFromVolume, Volume } = require('memfs');

module.exports = function (compiler) {
  // Create a virtual filesystem
  const outputFileSystem = createFsFromVolume(new Volume());
  // Add mkdirp functionality
  outputFileSystem.mkdirp = outputFileSystem.mkdir;

  return [
    devMiddleware(compiler, {
      stats: 'minimal',
      publicPath: '/',
      outputFileSystem
    })
  ];
};
