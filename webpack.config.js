var path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, "./src"),
  entry: {
    // key: value    
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-bundle.js'
  }
}