var path = require('path')

var mode = process.env.NODE_ENV || 'development'

var ext = mode === 'production' ? '.min.js' : '.js'

module.exports = {
  entry: './scroll-direction.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: `scroll-direction${ext}`,
    library: 'ScrollDirection',
    libraryTarget: 'umd'
  },
  mode
}
