import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// 封装独立创建vue实例
export function createApp () {
  let app = new Vue({
    router,
    render: h => h(App)
  })
  return {
    router,
    app
  }
}
