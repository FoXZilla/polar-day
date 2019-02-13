const Webpack = require('webpack');

module.exports = {
    entry: './entry.ts',
    output: {
        path: __dirname,
        filename: 'output.js',
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    resolve: { extensions: ['.js', '.ts'] },
};
