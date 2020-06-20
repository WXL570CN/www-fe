const path = require('path');
const config = require('config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = new CopyWebpackPlugin([
  {
    from: path.join(config.src, 'assets/static'),
    to: path.join(config.build, 'assets/static'),
  },
  {
    from: path.join(config.src, 'user-center/assets/static'),
    to: path.join(config.build, 'assets/static'),
  },
]);
