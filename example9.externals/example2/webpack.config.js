module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'webpack-numbers.js',
        libraryTarget: 'umd',
        library: 'webpackNumbers'
    },
    externals: {
        'lodash': {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    module: {
        loaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query:{
                presets:["es2015"]
            }
        }]
    },
};
