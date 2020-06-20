const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rule = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
    },
  ],
};
module.exports = rule;
