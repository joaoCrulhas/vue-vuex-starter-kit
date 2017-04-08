// const Webpack = require('webpack');
const helpers = require('./helpers');
const config = require('./project.config');
const debug = require('debug')('app:webpack');

debug('webpack start.');

/*
 * webpack plugins
 * **/
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    polyfills: helpers('src/polyfills'),
    main: helpers('src/main')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: [{
          loader: 'vue-loader'
        }],
        include: helpers('src'),
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ],
        include: helpers('src'),
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [helpers('src'), helpers('node_modules')],
    alias: {
      vue: helpers('node_modules/vue/dist/vue.min'),
      vuex: helpers('node_modules/vuex/dist/vuex.min'),
      'vue-router': helpers('node_modules/vue-router/dist/vue-router.min'),
      axios: helpers('node_modules/axios/dist/axios.min')
    }
  },
  plugins: [
    new AssetsWebpackPlugin({
      path: helpers('dist'),
      filename: 'webpack-assets.json',
      prettyPrint: true
    }),
    new HtmlWebpackPlugin({
      template: helpers('src/index.html'),
      favicon: helpers('public/favicon.ico'),
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new CommonsChunkPlugin({
      name: 'polyfills',
      chunks: ['polyfills']
    }),
    // This enables tree shaking of the vendor modules
    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: module => /node_modules/.test(module.resource)
    }),
    // Specify the correct order the scripts will be injected in
    new CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new DefinePlugin(config.globals)
  ]
}