const webpack = require('webpack');
const copyWebpackPlugin = require('./CopyWebpackPlugin');
const CaseSensitivePathsPlugin = require('./CaseSensitivePathsPlugin');
const HtmlWebpackPlugin = require('./HtmlWebpackPlugin');
const MiniCssExtractPlugin = require('./MiniCssExtractPlugin');
const VueLoaderPlugin = require('./VueLoaderPlugin');
const BundleAnalyzerPlugin = require('./BundleAnalyzerPlugin');
const definePlugin = require('./DefinePlugin');
const providePlugin = require('./ProvidePlugin');
const cleanPlugin = require('./CleanPlugin');
const progressPlugin = require('./progressPlugin');

const lodash = new webpack.ProvidePlugin({
  _: 'underscore',
});

const plugins = [];

plugins.push(
  ...HtmlWebpackPlugin,
  CaseSensitivePathsPlugin,
  MiniCssExtractPlugin,
  VueLoaderPlugin,
  BundleAnalyzerPlugin,
  copyWebpackPlugin,
  lodash,
  definePlugin,
  providePlugin,
  cleanPlugin,
  progressPlugin,
);


module.exports = plugins;
