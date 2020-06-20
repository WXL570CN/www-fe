/**
 * Created by ronie on 2019/11/22.
 */


const config = {
  env: 'testing',
  cfg: {
    from: 'testing',
    loaded: {
      testing: true,
    },
  },
  webAppRuntime: {
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
