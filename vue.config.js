const { defineConfig } = require('@vue/cli-service')
const webConfig = require('./web.config')
const path = require('path')

const port = process.env.port || process.env.npm_config_port || 8848 // dev port

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: process.env.ENV === 'development',
  publicPath: '/',
  devServer: {
    host: '0.0.0.0',
    port: port,
    client: {
      webSocketURL: 'ws://0.0.0.0:' + port + '/ws'
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    name: webConfig.web_title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // 配置svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
})
