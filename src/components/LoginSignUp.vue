<template>
  <div class="form">
    <ul class="tab-group">
      <li class="tab active">
        <a href="#signup" data-toggle="tab">注册</a>
      </li>
      <li class="tab">
        <a href="#login" data-toggle="tab">登录</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade in active" id="signup">
        <h1>免费注册</h1>
        <h4 v-if="isRegisterFail" class="text-danger">{{message}}</h4>
        <form>
          <div class="field-wrap">
            <input type="text" v-model="username" required autocomplete="off" placeholder="请输入用户名">
          </div>
          <div class="field-wrap">
            <input type="password" v-model="password" required autocomplete="off" placeholder="请输入密码">
          </div>
          <div class="field-wrap">
            <input type="password" v-model="passwordConfirm" required autocomplete="off" placeholder="请确认密码">
          </div>
          <div class="field-wrap">
            <input type="text" v-model="age" required autocomplete="off" placeholder="请输入年龄(可不填)">
          </div>
          <div class="field-wrap">
            <input type="text" v-model="sex" required autocomplete="off" placeholder="请输入性别(可不填)">
          </div>
          <div class="field-wrap">
            <input type="text" v-model="address" required autocomplete="off" placeholder="请输入地址(可不填)">
          </div>
          <button type="button" @click="RegisterClick" class="button button-block">注册</button>
        </form>
      </div>
      <div class="tab-pane fade" id="login">
        <h1>欢迎回来</h1>
        <h4 v-if="isLoginFail" class="text-danger">{{message}}</h4>
        <form>
          <div class="field-wrap">
            <input type="text" v-model="username" required autocomplete="off" placeholder="请输入用户名">
          </div>
          <div class="field-wrap">
            <input type="password" v-model="password" required autocomplete="off" placeholder="请输入密码">
          </div>
          <button type="button" @click="LoginClick" class="button button-block">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/sign-up-login-form/js/index'
import '../assets/sign-up-login-form/css/style.css'

export default {
  name: 'LoginSignUp',
  data () {
    return {
      message: 'Hello',
      isLoginFail: false,
      isRegisterFail: false,
      username: null,
      password: null,
      passwordConfirm: null,
      age: null,
      sex: null,
      address: null
    }
  },
  methods: {
    LoginClick: function () {
      if (!this.username) {
        this.isLoginFail = true
        this.message = '请输入用户名'
      } else if (!this.password) {
        this.isLoginFail = true
        this.message = '请输入密码'
      } else {
        this.isLoginFail = false
        this.$axios({
          method: 'post',
          url: this.GetUrl(),
          data: this.qs.stringify({
            username: this.username,
            password: this.password
          })
        }).then((response) => {
          console.log(response)
          if (response.data.status === 0) {
            this.Global.UserInfo.userName = this.username
            this.Global.UserInfo.isLogin = true
            this.Global.UserInfo.righs = response.data.data.rights
            this.Cookie.set('username', this.username, { expires: 7, path: '' })
            this.Cookie.set('password', this.password, { expires: 7, path: '' })
            this.Cookie.set('isLogin', true, { expires: 7, path: '' })
            this.Cookie.set('rights', response.data.data.rights, { expires: 7, path: '' })
            this.$router.push('/')
          } else {
            this.isLoginFail = true
            this.message = response.data.msg
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    RegisterClick: function () {
      if (!this.username) {
        this.isRegisterFail = true
        this.message = '请输入用户名'
      } else if (!this.password) {
        this.isRegisterFail = true
        this.message = '请输入密码'
      } else if (this.password !== this.passwordConfirm) {
        this.isRegisterFail = true
        this.message = '两次输入密码不一致'
      } else {
        this.isRegisterFail = false
        this.$axios({
          method: 'post',
          url: this.Global.SERVER_URL.register,
          data: this.qs.stringify({
            username: this.username,
            password: this.password,
            age: this.age,
            sex: this.sex,
            address: this.address
          })
        }).then((response) => {
          console.log(response)
          if (response.data.status === 0) {
            this.Global.UserInfo.userName = this.username
            this.Global.UserInfo.isLogin = true
            this.Cookie.set('username', this.username, { expires: 7, path: '' })
            this.Cookie.set('password', this.password, { expires: 7, path: '' })
            this.Cookie.set('isLogin', true, { expires: 7, path: '' })
            this.$router.push('/')
          } else {
            this.isRegisterFail = true
            this.message = response.data.msg
          }
        })
      }
    },
    GetUrl: function () {
      if (this.username === 'easy') {
        return this.Global.SERVER_URL.admin_login
      } else {
        return this.Global.SERVER_URL.login
      }
    }
  }
}
</script>
