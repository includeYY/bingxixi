const SERVER = 'http://bingxixi.damneasy.top:8080'

const SERVER_URL = {
  login: SERVER + '/client/login.do',
  register: SERVER + '/client/register.do',
  logout: SERVER + '/client/logout.do',
  get_user_info: SERVER + '/client/get_user_info.do',
  update_information: SERVER + '/client/update_information.do',
  get_active_list: SERVER + '/bill/get_active_list.do',
  list_by_shop: SERVER + '/bill/list_by_shop.do',
  search_bill: SERVER + '/bill/search_bill.do',
  list_my_bill_all: SERVER + '/bill/manage/list_my_bill_all.do',
  list_my_bill_active: SERVER + '/bill/manage/list_my_bill_active.do',
  admin_login: SERVER + '/client/manager/admin_login.do',
  delete_client: SERVER + '/client/manager/delete_client.do',
  delete_bill: SERVER + '/client/manager/delete_bill.do',
  check_user: SERVER + '/client/manager/check_user.do',
  create_bill: SERVER + '/bill/manage/create_bill.do',
  detail: SERVER + '/bill/detail.do',
  join_bill: SERVER + '/bill/manage/join_bill.do',
  quit_bill: SERVER + '/bill/manage/quit_bill.do',
  reset_password: SERVER + '/client/reset_password.do'
}

var UserInfo = {
  userName: null,
  isLogin: false,
  rights: null
}

export default {
  SERVER_URL,
  UserInfo
}
