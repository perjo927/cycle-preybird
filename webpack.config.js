const webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: '',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=es2015'
        }]
    }
};