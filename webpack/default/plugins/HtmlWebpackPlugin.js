const path = require('path');
const config = require('config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const apps = {
  index: {
    id: 'index',
    entryKey: 'main',
    template: path.join(config.src, 'index.html'),
    filename: 'index.html',
    excludeChunks: ['userCenter'],
  },
  userCenter: {
    id: 'user-center',
    entryKey: 'userCenter',
    template: path.join(config.src, 'user-center', 'personal-center.ejs'),
    filename: 'user-center.html',
    excludeChunks: ['main'],
  },
};

module.exports = Object.values(apps).map((app) => new HtmlWebpackPlugin({
  template: app.template,
  excludeChunks: app.excludeChunks,
  path: config.build,
  filename: app.filename,
  inject: true,
  minify: config.isProduction ? {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    useShortDoctype: true,
  } : null,
}));
