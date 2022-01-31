const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
  
module.exports = {
    entry: {
      app: `${__dirname}/src/index.jsx`
    },
    output: {
      filename: '[name].js',
      sourceMapFilename: '[name].js.map',
      path: `${__dirname}/dist`
    },
  devtool: 'source-map',
  
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
      static: path.resolve(__dirname, 'public'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      })
    ],
    module: {
      rules: [
          {
              test: /\.jsx$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          }
      ]  
    }
}