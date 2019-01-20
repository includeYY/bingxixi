import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routers from './router/router'
import './assets/PcStyle.css'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
