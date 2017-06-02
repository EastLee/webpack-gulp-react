const webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    main: './main.js',
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: './',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"My App",
      webpackManifest:JSON.stringify({"0":"main.5f020f80c23aa50ebedf.js","1":"vendor.81adc64d405c8b218485.js"}),
      filename:"../html/index.html",
      template:"./build/index.html"
    })
  ]
};

//参考：http://www.cnblogs.com/haogj/p/5160821.html