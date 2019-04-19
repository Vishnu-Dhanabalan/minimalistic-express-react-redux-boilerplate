import express from "express";
import path from "path";
import webpack from "webpack";

import config from "../../configs/config.project";

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");
const PORT = config.server.port;

// Setup webpack hot and dev middleware if the NODE_ENV is development
if (process.env.NODE_ENV === "development") {
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpack_config = require("../../configs/webpack.config.dev");
  const compiler = webpack(webpack_config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpack_config.output.publicPath
    })
  );

  app.use(webpackHotMiddleware(compiler));

  app.get("*", (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set("content-type", "text/html");
      res.send(result);
      res.end();
    });
  });
} else if (process.env.NODE_ENV === "production") {
  app.use(express.static(DIST_DIR));
  app.get("*", (req, res) => {
    res.sendFile(HTML_FILE);
  });
}

// Add all routes
// app.use()

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});
