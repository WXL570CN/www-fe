/**
 * Created by ronie on 2019/11/29.
 */


const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const webpackConfig = {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name]-[contenthash:10].js',
    publicPath: '/static/user-center/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({}),
    ],
  },
};

module.exports = webpackConfig;
