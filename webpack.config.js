const path = require('path');

module.exports = {
    entry: './source/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    resolve: {
        alias: {
            source: path.resolve(__dirname, 'source/')
        }
    }
};
