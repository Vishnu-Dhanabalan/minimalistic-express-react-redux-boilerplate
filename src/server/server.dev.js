import express from "express";
import path from "path";
import config from "../../configs/config.project";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpack_config from "../../configs/webpack.config.dev";

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");
const compiler = webpack(webpack_config);
const PORT = config.server.port;

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

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});
