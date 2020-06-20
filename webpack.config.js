/**
 * Created by ronie on 2019/11/22.
 */


const config = require('config');
const webpackMerge = require('webpack-merge');
let webpackConfig = require('./webpack/default');
const production = require('./webpack/production');
const development = require('./webpack/development');

const envs = {
  production,
  development,
};

if (envs.hasOwnProperty(config.env)) {
  webpackConfig = webpackMerge(webpackConfig, envs[config.env]);
}
try {
  // eslint-disable-next-line global-require
  const localConfig = require('./webpack/local');
  webpackConfig = webpackMerge(webpackConfig, localConfig);
} catch (exception) {
}

module.exports = webpackConfig;
