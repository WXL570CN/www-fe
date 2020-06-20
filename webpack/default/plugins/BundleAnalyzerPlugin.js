/**
 * Created by ronie on 2019/11/29.
 */


const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  reportFilename: 'tmp/BundleAnalyzer.html',
  openAnalyzer: false,
});
