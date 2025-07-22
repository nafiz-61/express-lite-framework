const { log } = require("console");
const http = require("http");

// it will contain the routes and middleware
class App {
  constructor() {
    this.routes = [];
    this.middleware = [];
  }

  // use method
  use(middlewareFn) {
    this.middleware.push(middlewareFn);
  }

  // get method
  get(path, handeler) {
    this.routes.push({ method: "GET", path, handeler: handeler });
  }

  // post method
  post(path, handeler) {
    this.routes.push({ method: "POST", path, handeler: handeler });
  }

  executeMiddleware(req, res) {
    const dispatch = (i = 0) => {
      const singleMiddleware = this.middleware[i];
      return new Promise((resolve, reject) => {
        singleMiddleware(req, res, () => {
          resolve(dispatch(i + 1));
        });
      });
    };
    return dispatch(0);
  }

  ourlisten(port, callback) {
    const server = http.createServer((req, res) => {
      // execute middleware
      this.executeMiddleware(req, res);
      // search path
      const searchRoute = this.routes.find(
        (r) => r.method == req.method && r.path == req.url
      );
      if (searchRoute) {
        searchRoute.handeler(req, res);
      } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("404 Not Found");
      }
    });
    server.listen(port, callback);
  }
}

module.exports = App;
