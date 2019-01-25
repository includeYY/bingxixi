import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from '../components/MainWindow.vue'
import UserSpace from '../components/UserSpace.vue'
import UserInfo from '../components/UserInfo.vue'
import Message from '../components/Message.vue'
import BillList from '../components/BillList.vue'
import LoginSignUp from '../components/LoginSignUp.vue'
import MidLayer from '../components/MidLayer.vue'

Vue.use(Router)

const routers = [
  {
    path: '/',
    name: 'MainWindow',
    component: MainWindow,
    children: [
      {
        path: 'bill-info',
        component: BillList
      }
    ]
  },
  {
    path: '/user',
    name: 'Hello',
    component: UserSpace,
    children: [
      {
        path: '',
        component: UserInfo
      },
      {
        path: 'message',
        component: Message
      },
      {
        path: 'bill-info',
        component: BillList
      },
      {
        path: 'mid-layer/:cas',
        component: MidLayer
      }
    ]
  },
  {
    path: '/login-sign-up',
    name: 'LoginSignUp',
    component: LoginSignUp
  }
]

export default routers
