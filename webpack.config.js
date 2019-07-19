'use strict';
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: "http://localhost:8080/dist/",
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.svg/,
                use: ['file-loader']
            }
        ]
    }
};