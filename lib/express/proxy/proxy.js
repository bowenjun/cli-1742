module.exports = {
  '/anti-fraud': {
    target: 'http://192.168.1.37:8088/',
    changeOrigin: true,
    pathRewrite: {
      '^/anti-fraud': ''
    },
    onProxyReq: function(proxyReq, req, res) {
      proxyReq.setHeader('uid', 167)
    }
  },
  '/rule-engine': {
    target: 'http://192.168.1.37:8089/',
    changeOrigin: true,
    pathRewrite: {
      '^/rule-engine': ''
    },
    onProxyReq: function(proxyReq, req, res) {
      proxyReq.setHeader('uid', 167)
    }
  }
}
