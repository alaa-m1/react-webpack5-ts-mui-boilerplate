const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin} =require('webpack')
module.exports = {
  cache: false,
  mode: "development",
  devServer: {
    port: 3005,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ProvidePlugin({
      React: 'react',
      process: 'process/browser',
  })
  ],
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
        options: {
          loader: "jsx",
          target: "es6",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      }
    ],
  },
};
