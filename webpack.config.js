var path = require("path")
var webpack = require("webpack")

module.exports = {
  //   entry: ["babel-polyfill", "./src/index.js"],
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "script.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: "./build",
    hot: true,
  },
  target: "node",
  module: {
    loaders: [
      {
        test: /(\.csv)$/,
        loader: "csv-loader",
      },
      {
        test: /(\.js|\.jsx)$/,
        loader: "babel-loader",
        query: {
          // presets: ["env"],
          plugins: [
            "transform-object-rest-spread",
            "transform-decorators-legacy",
            "transform-class-properties",
            "transform-do-expressions",
          ],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: "inline-source-map",
}
