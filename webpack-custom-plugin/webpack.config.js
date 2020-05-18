const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const No1WebpackPlugin = require('./plugins/No1-webpack-plugin');
// const No2WebpackPlugin = require('./plugins/No2-webpack-plugin');
// const FileListPlugin = require('./plugins/File-list-plugin');
// const WatchPlugin = require('./plugins/Watch-plugin');
// const DecideHtmlPlugin = require('./plugins/Decide-html-plugin');
const CleanPlugin = require('./plugins/Clean-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    // './src/index.js',
    './src/index.js',
    './src/style.css'
  ],
  output: {
    // filename: '[name].bundle.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom-plugin'
    }),
    // new CleanWebpackPlugin(),
    // new No1WebpackPlugin({ msg: 'good boy!' })
    // new No2WebpackPlugin({ msg: 'bad boy!' })
    // new  FileListPlugin()
    // new WatchPlugin()
    // new DecideHtmlPlugin()
    new CleanPlugin({
      exclude: [
        "main.e0c6be8f72d73a68f73a.js"
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
}