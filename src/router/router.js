import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from '../components/MainWindow.vue'
import UserSpace from '../components/UserSpace.vue'
import UserInfo from '../components/UserInfo.vue'
import BillList from '../components/BillList.vue'
import LoginSignUp from '../components/LoginSignUp.vue'
import MidLayer from '../components/MidLayer.vue'
import DeleteUser from '../components/DeleteUser.vue'
import DeleteBill from '../components/DeleteBill.vue'
import Release from '../components/Release.vue'
import Detail from '../components/DetailPage.vue'
import BillInfo from '../components/BillInfo.vue'
import ChangePassword from '../components/ChangePassword.vue'

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
        path: 'bill-info',
        component: BillInfo
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
      },
      {
        path: 'change-password',
        component: ChangePassword
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
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

export default routers
