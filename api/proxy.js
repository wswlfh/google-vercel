const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://www.github.com/";

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
    },
  })(req, res);
};
