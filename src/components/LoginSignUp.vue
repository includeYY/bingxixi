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
        <h4 class="text-danger" v-if="error">{{message}}</h4>
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
          <button type="submit" class="button button-block">注册</button>
        </form>
      </div>
      <div class="tab-pane fade" id="login">
        <h1>欢迎回来</h1>
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
      message: null,
      error: false,
      username: null,
      password: null,
      passwordConfirm: null
    }
  },
  methods: {
    LoginClick: function () {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.login,
        data: this.qs.stringify({
          username: this.username,
          password: this.password
        })
      }).then((response) => {
        console.log(response)
        if (response.data.status === 0) {
          this.Global.UserInfo.userName = response.data.username
          this.Global.UserInfo.isLogin = true
          this.$router.push('/')
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
