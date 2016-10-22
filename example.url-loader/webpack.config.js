var webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'index.js'
  },
  module:{
      loaders:[{
          test:/\.(png|jpg)$/,
          loader: 'url-loader?limit=78192&name=[path][name].[ext]'
      },{
          test:/\.css$/,
          loader:'style-loader!css-loader'
      }]
  }
}
