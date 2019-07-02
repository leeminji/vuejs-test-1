'use strict'

module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'https://ws.audioscrobbler.com',
              changeOrigin: true,
              pathRewrite: {
                  '^/2.0': ''
              }
          }
      }
  },
	publicPath: "./",
    assetsDir : "./public",
    chainWebpack: config => {
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: 10240 })) 
    }
}