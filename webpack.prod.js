console.log("webpack.prod.js");

var path = require("path");
var ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "docs"),
    filename: "bundle.js",
    publicPath: "/docs"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname,
      query: {
        presets: ["es2015", "react"]
      }
    }]
  },
  plugins: [
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/sw.js'),
      publicPath: "/todo-pwa/"
    }),
    new CopyWebpackPlugin([{ from: "index.html" }])
  ]
};