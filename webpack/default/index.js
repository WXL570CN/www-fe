/**
 * Created by ronie on 2019/11/22.
 */


const path = require('path');
const config = require('config');
const plugins = require('./plugins');
const rules = require('./rules');

const webpackConfig = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: path.join(config.workDir, 'src/index.js'),
    userCenter: path.join(config.src, 'user-center', 'index.js'),
  },
  output: {
    path: path.join(config.workDir, 'build'),
    publicPath: '',
    filename: '[name]-[hash:10].js',
  },
  module: {
    rules,
  },
  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js',
      '@src': config.src,
    },
    extensions: ['.js', '.vue'],
  },
  mode: 'development',
  stats: {
    assets: false,
    warnings: false,
    modules: false,
    children: false,
    errorDetails: true,
    entrypoints: false,
  },
};

module.exports = webpackConfig;
