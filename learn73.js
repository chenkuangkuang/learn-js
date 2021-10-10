//webpack配置解析

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // 入口：多入口
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 输出，pubcliPath用于静态资源的url前缀
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // 每种模块逐一处理
    module: {
        rules: [
            {
                test: /.css$/,
                // 从右往左处理
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // 开发工具，用于映射源代码位置和行数
    devtool: 'inline-source-map',
    // 开发服务，用于热更新
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // 重定义如何处理模块资源，例如设置模块的别名，设置是否允许无后缀名等
    // 用于配置路径，方便直接引用组件（不用写完整路径）
    resolve:{
        extensions: ["", ".js", ".jsx"],
        alias: {
            'react-dom': path.join(nodeModulesPath, '/react-dom/dist/reac-dom'),
            'redux': path.join(nodeModulesPath, '/redux/dist/redux')
        }
    },
    // 插件
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            minChunks: Infinity,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]