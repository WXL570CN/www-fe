const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = new MiniCssExtractPlugin({
  filename: '[name]-[contenthash:10].css',
  chunkFilename: '[name]-[contenthash:10].css',
});
