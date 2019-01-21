import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from '../components/MainWindow.vue'
import UserSpace from '../components/UserSpace.vue'
import UserInfo from '../components/UserInfo.vue'
import Message from '../components/Message.vue'
import BillList from '../components/BillList.vue'

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
      }
    ]
  }
]

export default routers
