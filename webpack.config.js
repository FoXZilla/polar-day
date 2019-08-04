const Webpack = require('webpack');

module.exports = {
    entry: {
        'example/webpack-output': './example/webpack.ts',
        output: './index.ts'
    },
    output: {
        path: __dirname,
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
