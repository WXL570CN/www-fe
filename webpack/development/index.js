/**
 * Created by ronie on 2019/11/29.
 */


const HtmlWebpackHotPlugin = require('html-webpack-hot-plugin');
const devServer = require('./devServer');
const dashboardPlugin = require('./DashboardPlugin');

const htmlHotPlugin = new HtmlWebpackHotPlugin({
  hot: true,
});
devServer.before = (app, server) => {
  htmlHotPlugin.setDevServer(server);
};

const webpackConfig = {
  devtool: 'eval-source-map',
  watch: true,
  devServer,
  plugins: [
    dashboardPlugin,
    htmlHotPlugin,
  ],
};

module.exports = webpackConfig;
