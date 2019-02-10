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
    plugins: [
        new Webpack.DefinePlugin({ // Short Night 依赖于此插件来读取是否开启 Debug 模式
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};
