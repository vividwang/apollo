const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const happyThreadPool = HappyPack.ThreadPool({ size: 3 });

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', resolve(__dirname, 'src/app.js')],// resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'bundle'),
    filename: "app-[hash:8].bundle.js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: resolve(__dirname, 'src'),
      loader: ['happypack/loader?id=babel'],
    }, {
      test: /\.(sa|sc|c)ss$/,
      // use: ['style-loader', 'css-loader'],
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: resolve(__dirname, 'src'),
          hmr: process.env.NODE_ENV !== 'production'
        }
      }, 'css-loader',
        'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
            resources: resolve(__dirname, 'src/style/global.scss')
          }
        }]
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name]-[hash:5].min.[ext]",
            limit: 20000, // size <= 20KB
            publicPath: "static/",
            outputPath: "static/"
          }
        }
      ]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: "index.html",
      cache: true
    }),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV !== 'production' ? 'dist/css/[name].css' : 'dist/css/[name].[hash-8].css',
      chunkFilename: process.env.NODE_ENV !== 'production' ? 'dist/css/[id].css' : 'dist/css/[id].[hash-8].css'
    }),
    new HappyPack({
      id: 'babel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ],
      threadPool: happyThreadPool
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, './'),
    // publicPath: '/dist/',
    compress: true,
    hot: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:4000'
    }
  }
};
