var path = require('path')
var webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

function root (args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [__dirname].concat(args))
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.html']
  },
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre'
    }, {
      test: /index.html$/,
      loader: 'string-replace-loader',
      query: {
        search: 'BASE_URL',
        replace: process.env.NODE_ENV === 'deploy' ? '/ngx-quill-example/' : '/'
      }
    }, {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  },

  entry: {
    'app': './src/main.ts'
  },

  devServer: {
    watchOptions: {
      poll: true
    },
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunks: false
    }
  },

  output: {
    path: root('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
      // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('./src')
    ),

    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.optimize.OccurrenceOrderPlugin(true),

    new webpack.ProvidePlugin({
      'window.Quill': 'quill/dist/quill.js'
    })
  ]
}
