const SERVER = 'http://bingxixi.damneasy.top:8080'

const SERVER_URL = {
  login: SERVER + '/client/login.do',
  register: SERVER + '/client/register.do'
}

var UserInfo = {
  userName: null,
  isLogin: false
}

export default {
  SERVER_URL,
  UserInfo
}
