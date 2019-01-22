import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routers from './router/router'
import Cookies from 'js-cookie'
import './assets/GlobalStyle.css'

Vue.config.productionTip = false
Vue.use(Router)

Vue.prototype.Cookies = Cookies

const router = new Router({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
