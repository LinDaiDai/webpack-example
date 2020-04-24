const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      options: {
        title: 'webpack server'
      }
    })
  ],
  devServer: {
    contentBase: './dist', // 告诉服务器从哪里提供内容
    host: '0.0.0.0', // 默认是 localhost
    port: 8000, // 端口号, 默认是8080
    open: true, // 是否自动打开浏览器
    hot: true, // 启用 webpack 的模块热替换特性
    hotOnly: true // 当编译失败之后不进行热更新
  }
}