import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from '../components/MainWindow.vue'
import UserInfo from '../components/UserInfo.vue'

Vue.use(Router)

const routers = [
  {
    path: '/',
    name: 'MainWindow',
    component: MainWindow
  },
  {
    path: '/user',
    name: 'Hello',
    component: UserInfo
  }
]

export default routers
