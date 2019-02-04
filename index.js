
//https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/
require('babel-register')({
  presets: [ 'env' ]
})

module.exports = require('./src/server.js')