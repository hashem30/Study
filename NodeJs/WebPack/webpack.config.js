//var webpack = require('webpack');
//var production = process.env.NODE_ENV === 'production';

module.exports = {
    entry:  './src',
    output: {
        path:     'builds',
        filename: 'bundle.js',
        publicPath: 'builds/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test:   /\.scss/,
                loader: 'style!css!sass',
                exclude: /node_modules/,
                // Or
                //loaders: ['style', 'css', 'sass'],
            },
            {
                test:   /\.html/,
                loader: 'html',
                exclude: /node_modules/,
            }
        ]
    }
};
