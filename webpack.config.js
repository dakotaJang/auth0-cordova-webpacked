module.exports = {
  entry: './src/auth0.cordova.js',
  output: {
    filename: './auth0.cordova-0.3.0.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/
      }
    ]
  }
};