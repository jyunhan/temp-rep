const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const browserConfig = {
  mode: 'development',
  entry: [
    './src/browser/index.tsx',
    './src/scss/default.scss',
    './src/scss/header.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx', '.scss', '.css' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'source-map-loader'
          },
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader'
          },
        ]
      },
      {
        test: /\.(s?css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}

const serverConfig = {
  mode: 'development',
  entry: [
    './src/server/index.tsx',
  ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [ 'ts', '.tsx', '.ts', '.js', '.jsx', '.scss', '.css' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'source-map-loader'
          },
          {
            loader: 'awesome-typescript-loader'
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    }),
  ]
}

module.exports = [browserConfig, serverConfig]
