/* global __dirname */
const isProd = (process.env.NODE_ENV === 'production');
const path = require('path');

module.exports = {
  entry: ['./src/bookmarks.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    library: 'Bookmarks',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  // plugins: plugins
};
