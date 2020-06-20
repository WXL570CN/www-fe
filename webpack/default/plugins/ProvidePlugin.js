const webpack = require('webpack');

const providePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
});

module.exports = providePlugin;
