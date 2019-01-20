import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from '../components/MainWindow.vue'
import UserSpace from '../components/UserSpace.vue'

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
    component: UserSpace
  }
]

export default routers
