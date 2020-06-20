/**
 * Created by ronie on 2019/11/22.
 */


const config = {
  env: 'production',
  cfg: {
    from: 'production',
    loaded: {
      production: true,
    },
  },
  webAppRuntime: {
    appEnv: 'production',
    userCenter: {
      MFConfig: {
        wwwRoot: '',
        publicPath: '/static/user-center/',
      },
      vuexConfig: {
        strict: false,
        debug: false,
      },
    },
  },
};

module.exports = config;
