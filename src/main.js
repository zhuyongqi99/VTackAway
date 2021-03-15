/*
 入口js
*/
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'

window.app = new Vue({
  el: '#app',
  // components: { App },
  // template: '<App />'
  // 使用render简写
  render: h => h(App),
  router
  // store
})
