module.exports = {
  entry: ["./app/main.js"],
  output: {
    path: __dirname,
    filename: "./bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
    ],
  },
};
