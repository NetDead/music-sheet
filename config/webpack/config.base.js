const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('./utils/helpers/path');

const PUBLIC_PATH = path('public');
const BASE_PATH = process.env.BASE_PATH || '/';

module.exports = {
  mode: 'development',
  entry: {
    app: path('src/app/app.jsx'),
  },
  output: {
    path: PUBLIC_PATH,
    publicPath: BASE_PATH,
    filename: '[name].[contenthash].js',
  },
  resolve: {
    modules: [path('src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      // JSX
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path('src/app/index.html'),
      basePath: BASE_PATH,
      minify: { removeScriptTypeAttributes: true },
    }),
  ],
};
