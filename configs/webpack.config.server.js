const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = () => {
  const SERVER_PATH = "./src/server/server.js";

  return {
    entry: {
      server: SERVER_PATH
    },
    output: {
      path: path.join(__dirname, "..", "dist"),
      publicPath: "/",
      filename: "[name].js"
    },
    mode: process.env.NODE_ENV,
    target: "node",
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  };
};
