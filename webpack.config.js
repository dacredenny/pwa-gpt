var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const PUBLIC_PATH = 'https://pwa-gpt.surge.sh/';
 
module.exports = {
  entry: [
    './src/index.js'
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html' },
      { from: './src/img/**.*', to : './img/[name].[ext]' },
      { from: './src/css/**.*', to : './css/[name].[ext]' },
      { from: './src/fonts/**.*', to : './fonts/[name].[ext]' },
      { from: './src/manifest.json' },
    ], {
      debug : 'info'
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'pwa-gpt',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        staticFileGlobs: [
          'src/img/**.*',
          'src/css/**.*',
          'src/fonts/**.*',
          'dist/bundle.js',
          'dist/manifest.json',
          'dist/index.html',
        ],
        stripPrefixMulti:{ 
          'src' : '', 
          'dist' : ''
        },
        minify: !true,
        navigateFallback: PUBLIC_PATH + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/],
      }
    ),
  ],
};