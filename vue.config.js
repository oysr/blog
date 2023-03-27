const { defineConfig } = require('@vue/cli-service')
const webConfig = require('./web.config')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: process.env.ENV === 'development',
  publicPath: '/',
  configureWebpack: {
    name: webConfig.web_title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
})
