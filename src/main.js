import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import '@/assets/icons' // svg-icon
import globalValue from './utils/globalValue' // 全局变量
import requestService from './utils/request'

Vue.prototype.$globalValue = globalValue
// 在App.vue中的created()中执行$changeAxiosBaseURL用以改变http请求的ip和端口号
Vue.prototype.$changeAxiosBaseURL = function() {
  requestService.defaults.baseURL = globalValue.localURL
}
Vue.prototype.$axios = requestService

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
