/**
 * Created by ronie on 2019/11/22.
 */


const path = require('path');

const workDir = path.join(__dirname, '..');
const config = {
  env: 'development',
  isProduction: false,
  cfg: {
    from: 'default',
    loaded: {
      default: true,
    },
  },
  workDir,
  src: path.join(workDir, 'src'),
  build: path.join(workDir, 'build'),
  outputFiles: {
    bundle: 'bundle.js',
    vendor: 'vendor.js',
    css: 'style.css',
  },
  webAppRuntime: {
    appEnv: 'default',
    userCenter: {
      MFConfig: {
        wwwRoot: '/api/proxy/ronie',
        publicPath: '',
      },
      vuexConfig: {
        strict: true,
        debug: false,
      },
    },
  },
};

module.exports = config;
