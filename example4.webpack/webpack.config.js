var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
  entry: {
      Profile:'./src/profile.js',
      Feed:'./src/feed.js'
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
  // plugins: [commonsPlugin]
}
