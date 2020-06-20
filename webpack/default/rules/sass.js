const cssNext = require('postcss-cssnext');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = [
  {
    loader: MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        cssNext(),
      ],
    },
  },
  {
    loader: 'sass-loader',
  },
];

const rule = {
  test: /\.scss$/,
  use: [{
    loader: 'style-loader',
  }].concat(loaders),
};

module.exports = rule;
