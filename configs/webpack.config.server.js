const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  // This will be edited to choose server.dev.js or server.prod.js based on the mode
  const SERVER_PATH =
    argv.mode === "development"
      ? "./src/server/server.dev.js"
      : "./src/server/server.prod.js";

  const TARGET =
    argv.mode === "development" ? "electron-renderer" : "electron-main";

  return {
    entry: {
      server: SERVER_PATH
    },
    output: {
      path: path.join(__dirname, "..", "dist"),
      publicPath: "/",
      filename: "[name].js"
    },
    mode: argv.mode,
    target: TARGET,
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
};
