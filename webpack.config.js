var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'.'),
    filename: 'scroll-direction.js',
    libraryTarget: 'umd'
  }
}
