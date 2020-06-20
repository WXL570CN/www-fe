const devServer = {
  clientLogLevel: 'error',
  port: 3000,
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  proxy: {
    '/api/proxy/ronie/': {
      target: 'http://ronie-www.mf.plokij.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/proxy/ronie/': '',
      },
    },
    '/api/proxy/roniedev/': {
      target: 'http://roniedev-www.mf.plokij.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/proxy/roniedev/': '',
      },
    },
  },
};


module.exports = devServer;
