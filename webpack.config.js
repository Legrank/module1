const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
}
