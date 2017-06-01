//https://github.com/amireh/happypack
//http://taobaofed.org/blog/2016/12/08/happypack-source-code-analysis/?utm_source=tuicool&utm_medium=referral

const webpack = require('webpack');
var path = require('path');
var HappyPack = require('happypack');
var os = require("os");
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
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
      test: /\.(png|jpg)$/,
      // loader: 'url-loader?limit=8192'
      loader:"happypack/loader?id=happyurl"
    }, {
      test: /\.jsx?$/,
      // loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
      loader: 'happypack/loader?id=happybabel',
      include: path.join(__dirname, '.')
    }]
  },
  plugins: [
      new HappyPack({
        id: 'happybabel',
        loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
        threadPool: happyThreadPool,
        verbose: true
      }),
      new HappyPack({
        id:"happyurl",
        loaders:["url-loader?limit=8192"],
        threadPool: happyThreadPool
      })
  ]
};