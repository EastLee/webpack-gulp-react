var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
module.exports = {
  entry: {
      p1: "./src/page1",
      p2: "./src/page2",
      p3: "./src/page3",
      ap1: "./src/page4",
      ap2: "./src/page5"
  },
  output: {
    path: './dist/',
    filename: '[name].js'
  },
  module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'stage-0']
          }
      }]
  },
  plugins: [
      new CommonsChunkPlugin("admin-commons.js", ["p1", "p2"]),
      new CommonsChunkPlugin("commons.js", ["ap1", "ap2", "admin-commons.js"])
    ]
}

//用法：https://segmentfault.com/a/1190000006808865
