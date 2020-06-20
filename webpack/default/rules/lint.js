module.exports = {
  enforce: 'pre',
  test: /\.(js|vue|json|jsx)$/,
  exclude: /(node_modules|build|dist\/)/,
  loader: 'eslint-loader',
  options: {
    fix: true,
    emitWarning: true,
    quiet: true,
  },
};
