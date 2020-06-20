const webpack = require('webpack');
const config = require('config');

const definePlugin = new webpack.DefinePlugin({
  WEB_APP_RUNTIME_CONFIG: JSON.stringify(config.webAppRuntime),
});

module.exports = definePlugin;
