import Vue from 'vue'
import App from './App.vue'
import './assets/PcStyle.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
