var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var env = process.env.NODE_ENV;
var dev = env==='production'?true:false;
console.info(env==='production');
module.exports = {
  entry: {
      index:'./src/index.js',
      index1:'./src/index1.js'
  },
  output: {
    path: './dist/js',
    filename: '[name].js'
  },
  module:{
      loaders:[{
          test:/\.(png|jpg)$/,
          loader: 'url-loader?limit=78192&name=../[path][name].[ext]'
      },{ test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }]
  },
  plugins: [
        new ExtractTextPlugin("../css/[name].css",{allChunks:false}),
        new webpack.DefinePlugin({
           'process.env': {
               NODE_ENV:JSON.stringify(env)
           },
           __DEV__:dev
        })
    ]
}
