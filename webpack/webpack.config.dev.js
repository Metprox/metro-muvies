const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const paths = require('./paths');
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
    entry: [paths.appIndexJs],
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    devServer: {
        port: 8080,
        historyApiFallback: false,
        open: true,
        hot: true,
        publicPath: '/',
        stats: {
            colors: true,
        },
        overlay: {
            warnings: false,
            errors: true,
        },
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()],
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js(x?)|ts(x?))$/,
                include: path.resolve(paths.appSrc),
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                include: [path.resolve(paths.appSrc)],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    { loader: "css-modules-typescript-loader"},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        ],
    },
});
