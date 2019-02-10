import express from "express";
import path from "path";
import config from "../../configs/config.project";

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");

const PORT = config.server.port;

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});
