/**
 * project: miniExpress js ----> Routes , middleware, outSideRoutes
 * tech js: promise()
 * tech nj: http events
 */
const { log } = require("console");

const miniExpress = require("./framework/app");
const app = new miniExpress();

app.use((req, res, next) => {
  log("Middleware function one", req.url);
  next();
});

app.use((req, res, next) => {
  log("Middleware funtion two", req.method);
});

app.get("/home", (req, res) => {
  res.end("Welcome to home page");
});
app.get("/about", (req, res) => {
  res.end("Welcome to about page");
});
app.get("/mern", (req, res) => {
  res.end("Welcome to mern page");
});

app.ourlisten(4000, () => {
  console.log(`Server Running on http://localhost:4000`);
});
