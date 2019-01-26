import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from '../components/MainWindow.vue'
import UserSpace from '../components/UserSpace.vue'
import UserInfo from '../components/UserInfo.vue'
import Message from '../components/Message.vue'
import BillList from '../components/BillList.vue'
import LoginSignUp from '../components/LoginSignUp.vue'
import MidLayer from '../components/MidLayer.vue'
import DeleteUser from '../components/DeleteUser.vue'
import DeleteBill from '../components/DeleteBill.vue'
import Release from '../components/Release.vue'

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
      },
      {
        path: '/mid-layer/:cas/:key',
        component: MidLayer
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
      },
      {
        path: 'delete-user',
        component: DeleteUser
      },
      {
        path: 'delete-bill',
        component: DeleteBill
      }
    ]
  },
  {
    path: '/login-sign-up',
    name: 'LoginSignUp',
    component: LoginSignUp
  },
  {
    path: '/release',
    name: 'Release',
    component: Release
  }
]

export default routers
