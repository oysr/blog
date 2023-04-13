const localURL = 'htpp://localhost/'
const host = 'localhost'

function changeLocalURL(host) {
  // 生产环境下使用当前浏览器地址栏中访问的主机名和端口号作为请求URL的开头
  // 开发环境下指定目标服务器的ip和服务端口号作为请求开头
  if (process.env.ENV === 'production') {
    this.localURL = `http://${host}/`
    this.host = host
  } else {
    // 示例
    // this.host = '192.168.0.3:18081'
    // this.localURL = `http://${this.host}/`
    this.host = 'localhost:9999'
    this.localURL = `http://${this.host}/`
  }
}

export default {
  localURL,
  host,
  changeLocalURL
}
