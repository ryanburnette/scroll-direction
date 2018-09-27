var path = require('path')

var mode = process.env.NODE_ENV || 'development'

var ext = mode === 'production' ? '.min.js' : '.js'

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'built'),
    filename: `scroll-direction${ext}`,
    library: 'ScrollDirection',
    libraryTarget: 'umd'
  },
  mode
}
