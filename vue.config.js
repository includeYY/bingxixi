const webpack = require('webpack')

module.exports = {
  devServer: {
    port: 80
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  publicPath: '/'
}
