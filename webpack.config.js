const Webpack = require('webpack');
const Path = require('path');

module.exports = {
    entry: {
        'webpack-example': './src/webpack-example.ts',
        'polar-day': './src/index.ts'
    },
    output: {
        path: Path.join(__dirname, 'dist/'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'PolarDay',
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    resolve: { extensions: ['.js', '.ts'] },
};
