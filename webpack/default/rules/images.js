module.exports = {
  test: /\.(png|gif|jpg|svg)$/i,
  exclude: /(node_modules)/,
  use: [{
    loader: 'file-loader',
    options: {
      outputPath: 'assets',
      name: 'img/[name].[hash:8].[ext]',
    },
  }],
};
