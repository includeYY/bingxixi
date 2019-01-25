import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routers from './router/router'
import Global from './Global'
import axios from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'
import './assets/GlobalStyle.css'
import './assets/NavBarStyle.css'

Vue.config.productionTip = false
Vue.use(Router)

axios.defaults.withCredentials = true

Vue.prototype.Global = Global
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.prototype.Cookie = Cookie

Vue.prototype.GetAllBills = function () {
  this.$axios({
    method: 'post',
    url: this.Global.SERVER_URL.get_active_list
  }).then((response) => {
    console.log(response)
    if (response.data.status === 0) {
      this.$router.push({
        path: '/bill-info',
        query: {
          bills: JSON.stringify(response.data.data.list)
        }
      })
    }
  }).catch((err) => {
    console.log(err)
  })
}

const router = new Router({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
