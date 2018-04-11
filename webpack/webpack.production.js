const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const production = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true
      }
    }),
    new WebpackAssetsManifest(),
    new CssoWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: '../node_modules/apache-server-configs/dist/.htaccess' }
    ])
  ],
  devtool: 'source-map'
};

module.exports = production;
