const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

module.exports = (env, argv) => {
  if (!argv.mode) {
    throw new Error('You must pass an --mode flag into your build for webpack to work!');
  }

  const envConfig = require(`./webpack/webpack.${argv.mode}.js`);

  return webpackMerge(commonConfig, envConfig);
};
