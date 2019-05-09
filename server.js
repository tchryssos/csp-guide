const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
// Webpack stuff
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
const history = require('connect-history-api-fallback');
// const compiler = webpack(webpackConfig);

const app = express();

let userReqPath

// Custom Middleware
const logRequests = (req, res, next) => {
  userReqPath = req.path
  const date = new Date
  const body = req.body || ''
  console.log(`[${date.getTime()}]:`, req.method, req.path, body)
  next()
}

app.use(logRequests)
app.use(history())
app.get('/*', (req, res, next) => {
  let nonce

  if (userReqPath !== '/bad-form') {
    nonce = crypto.randomBytes(16).toString('base64');
    res.setHeader(
      'Content-Security-Policy',
      `script-src 'nonce-${nonce}' 'strict-dynamic' https:`
    )
  }

  // Apply nonce to script tags
  const reqFilePath = path.resolve(__dirname, 'www', req.path.substr(1))
  const html = fs
  .readFileSync(reqFilePath, 'utf8')
  .replace('<script ', `<script nonce="${nonce}" `)

  res.send(html)
})


// app.use(history())
// app.use(express.static(__dirname + '/www'));
// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//     warnings: false,
//   },
// }));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Website listening at http://%s:%s', host, port);
});
