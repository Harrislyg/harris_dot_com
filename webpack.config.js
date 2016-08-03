var webpack = require('webpack')
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/challenge.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Nav2: 'app/components/Nav2.jsx',
      Header: 'app/components/Header.jsx',
      Portfolio: 'app/components/Portfolio.jsx',
      About: 'app/components/About.jsx',
      Contact: 'app/components/Contact.jsx',
      Footer: 'app/components/Footer.jsx',
      Modal: 'app/components/Modal.jsx',
      Modala: 'app/components/Modala.jsx',
      Skillz: 'app/components/Skillz.jsx',


      apiDotMe: 'app/api/apiDotMe.jsx',


      applicationStyles: 'app/styles/challenge.css'

    },
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
