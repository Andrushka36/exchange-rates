/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = env => {
    return {
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 1111,
            historyApiFallback: true,
        },
        mode: env.NODE_ENV,
        entry: './src',
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
            }, {
                test: /\.(png|jpg|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                        outputPath: 'static',
                    },
                }],
            }, {
                test: /\.svg$/,
                use: [{
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        filenameCase: 'camel',
                        svgoConfig: {
                            plugins: [
                                { removeAttrs: { attrs: 'class' } },
                                { mergePaths: true },
                                { convertShapeToPath: true },
                                { convertPathData: true },
                            ],
                        },
                    },
                }, {
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10000,
                        noquotes: true,
                    },
                },
                ],
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new CleanWebpackPlugin(),
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
    };
};

module.exports = config;