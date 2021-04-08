const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(["/api", "/api/getBooks"], {
      target: "http://libback-env.eba-gpizad5f.us-east-2.elasticbeanstalk.com",
    })
  );
  app.use(
    proxy(["/api", "/login"], {
      target: "http://libback-env.eba-gpizad5f.us-east-2.elasticbeanstalk.com",
    })
  );
  app.use(
    proxy(["/api", "/register"], {
      target: "http://libback-env.eba-gpizad5f.us-east-2.elasticbeanstalk.com",
    })
  );
  app.use(
    proxy(["/api", "/api/getBooks:id"], {
      target: "http://libback-env.eba-gpizad5f.us-east-2.elasticbeanstalk.com",
    })
  );
  app.use(
    proxy(["/api", "/api/borrow"], {
      target: "http://libback-env.eba-gpizad5f.us-east-2.elasticbeanstalk.com",
    })
  );
  app.use(
    proxy(["/api", "/api/getIssues:id"], {
      target: "http://libback-env.eba-gpizad5f.us-east-2.elasticbeanstalk.com",
    })
  );
  app.use(
    proxy(["/api", "/api/return"], {
      target: "http://libback-env.eba-gpizad5f.us-east-2.elasticbeanstalk.com",
    })
  );
};
