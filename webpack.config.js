var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
      entry: SRC_DIR + "/app/index.js",
      output: {
            path: DIST_DIR + "/app",
            filename: "bundle.js",
            publicPath: "/app/"
      },
      rules: [
            {
                  loader: "babel-loader",
                  test: /\.js$/,
                  exclude: ["/node_modules/"]
            },

      ]

};

module.exports = config;