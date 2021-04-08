const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://libback-env.eba-gpizad5f.us-east-2.elasticbeanstalk.com",
      changeOrigin: true,
    })
  );
};
