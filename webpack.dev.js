/*  ========================================================================
    # Webpack - Development
    ========================================================================  */

/**
 * Configuration only used for development.
 *
 *
 * Table of Contents:
 *
 * Dependencies
 * Development Server
 * SCSS
 * Config Development
 */

// Dependencies
// =============================================================================

// Configs
const settings = require('./webpack.settings.js');
const common = require('./webpack.common.js');

// Modules
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

// Plugins
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Development Server
// =============================================================================

const devServer = () => {
  return {
    public: settings.developmentServer.public(),
    host: settings.developmentServer.host(),
    port: settings.developmentServer.port(),
    https: !!parseInt(settings.developmentServer.https(), 10),
    contentBase: path.resolve(__dirname, settings.paths.src.base),
    watchContentBase: true,
    watchOptions: {
      poll: settings.developmentServer.poll(),
      ignored: /node_modules/
    },
    open: true,
    hot: true,
    hotOnly: true,
    quiet: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
};

// SCSS
// =============================================================================

const SCSS = () => {
  return {
    test: /\.scss$/,
    include: path.resolve(__dirname, settings.paths.src.base),
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 3,
          sourceMap: false
        }
      },
      {
        loader: 'clean-css-loader',
        options: {
          level: {
            2: {
              mergeMedia: false
            }
          }
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              /* eslint-disable */
              require('autoprefixer')({
                env: 'modern',
                cascade: false
              })
              /* eslint-enable */
            ]
          }
        }
      },
      {
        loader: 'sass-loader'
      }
    ]
  };
};

// Config Development
// =============================================================================

const development = {
  mode: 'development',
  devServer: devServer(),
  output: {
    publicPath: settings.developmentServer.public() + settings.urls.dev,
    filename: 'js/[name].min.[hash].js'
  },
  module: {
    rules: [SCSS()]
  },
  plugins: [
    // Hot Module Replacement Plugin
    new webpack.HotModuleReplacementPlugin(),

    // Friendly Errors Webpack Plugin
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running at: localhost:8080'],
        notes: ['Hot reloading is enabled.']
      },
      clearConsole: true
    }),

    // HTML Webpack Plugin - Index
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: 'false',
        collapseWhitespace: 'true',
        preserveLineBreaks: 'true',
        minifyCSS: 'false',
        minifyJS: 'false'
      }
    })
  ]
};

module.exports = merge(common, development);
