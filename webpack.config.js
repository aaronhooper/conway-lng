const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [new CompressionPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
