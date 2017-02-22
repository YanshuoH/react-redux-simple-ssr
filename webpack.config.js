const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  entry: {
    client: './client/index',
    vendor: ['react'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dist.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/index.html'),
      hash: true,
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
}

module.exports = webpackConfig;
