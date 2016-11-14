var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './dist/js',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            beautify: true,
            mangle: {
                except: ['$super', '$', 'exports']
            },
            output: {
                comments: false
            }
        })
    ]
}
