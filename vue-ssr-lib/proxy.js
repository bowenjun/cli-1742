export default {
  target: 'http://url.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}