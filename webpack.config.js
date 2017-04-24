var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');

// minimize only in production
var plugins = isProd ? [new webpack.optimize.UglifyJsPlugin({minimize: true })] : []

module.exports = {
  entry: './index.js',
  // source map not in production
  devtool: !isProd && 'source-map',
  output: {
    filename: __dirname + '/dist/build.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules|dist/', loader: 'babel?presets[]=es2015' },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: plugins
};
