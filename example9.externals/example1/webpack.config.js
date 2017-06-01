module.exports = {
    devtool:"source-map",
    entry: {
        index: './index.js'
    },
    output: {
        path: './dist/',
        filename: '[name].js',
        libraryTarget: "umd"
    }
}
