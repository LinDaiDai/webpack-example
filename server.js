const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  open: true
}));

app.listen(3000, () => {
  console.log('listening on port 3000!\n')
})