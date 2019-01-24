import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routers from './router/router'
import Global from './Global'
import axios from 'axios'
import qs from 'qs'
import './assets/GlobalStyle.css'
import './assets/NavBarStyle.css'

Vue.config.productionTip = false
Vue.use(Router)

axios.defaults.withCredentials = true

Vue.prototype.Global = Global
Vue.prototype.$axios = axios
Vue.prototype.qs = qs

const router = new Router({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
