var path = require('path');
var webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

var config = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: PROD ? './public/bundle.min.js' : './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      Timer: path.resolve(__dirname, 'app/components/Timer.jsx'),
      Countdown: path.resolve(__dirname, 'app/components/Countdown.jsx'),
      Clock: path.resolve(__dirname, 'app/components/Clock.jsx'),
      CountdownForm: path.resolve(__dirname, 'app/components/CountdownForm.jsx'),
      Controls: path.resolve(__dirname, 'app/components/Controls.jsx'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader?presets[]=es2016&presets[]=react&presets[]=stage-0',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'sass-loader',
        test: /\.scss?$/,
        options: {
          includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
          ]
        }
      }
    ]
  },
  plugins: PROD !== '0' ? [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ] : [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ]
};

module.exports = config;
