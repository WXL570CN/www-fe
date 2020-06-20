module.exports = {
  test: /\.(ejs)$/,
  exclude: /(node_modules|build|dist\/)/,
  use: ['ejs-loader'],
};
