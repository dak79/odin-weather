// Generated using webpack-cli https://github.com/webpack/webpack-cli
/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const stylesHandler = MiniCssExtractPlugin.loader
const isProduction = process.env.NODE_ENV == 'production'

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    target: 'web',
    devServer: {
        open: true,
        host: 'localhost',
        liveReload: true,
        hot: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/favicon/weather-favicon.svg'
        }),

        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/imgs/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff(2)?|eot|tff|otf)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]'
                }
            }
        ]
    }
}

module.exports = () => {
    if (isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}
