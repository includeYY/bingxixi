<template>
  <div>
    <div class="navigation">
      <nav class="navbar navbar-default visible-lg visible-md" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#my-navigation"
            >
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/">并夕夕</router-link>
          </div>
          <div class="collapse navbar-collapse" id="my-navigation">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <router-link v-if="isLogin" to="/user">我的</router-link>
                <a v-else data-toggle="modal" data-backdrop="static" data-keyboard="false" href="#loginModal">登录/注册</a>
              </li>
              <li>
                <a v-if="isLogin" href="#">注销</a>
              </li>
            </ul>
            <form class="navbar-form navbar-right" role="search">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="拼单名称">
              </div>
              <button type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-default mobile-searchbar visible-xs visible-sm" role="navigation">
        <div class="container-fluid">
          <form class="navbar-form searchbar-form" role="search">
            <div class="form-group has-feedback searchbar-form">
              <input type="text" class="form-control" placeholder="输入拼单信息">
              <span class="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
          </form>
        </div>
      </nav>
    </div>

    <!-- 登录模态框 -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLable" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs nav-justified">
              <li><a href="#login" data-toggle="tab">登录</a></li>
              <li><a href="#register" data-toggle="tab">注册</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade in active" id="login">
                <form class="form-horizontal login-form" role="form">
                  <div class="form-group has-feedback">
                    <label for="username-login" class="col-sm-2 control-label">用户名</label>
                    <div class="col-sm-10">
                      <span class="glyphicon glyphicon-user form-control-feedback" aria-hidden="true"></span>
                      <input type="text" class="form-control" id="username-login" placeholder="请输入用户名">
                    </div>
                  </div>
                  <div class="form-group has-feedback">
                    <label for="password-login" class="col-sm-2 control-label">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                    <div class="col-sm-10">
                      <span class="glyphicon glyphicon-lock form-control-feedback" aria-hidden="true"></span>
                      <input type="password" class="form-control" id="password-login" placeholder="请输入密码">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <button type="button" v-on:click="LoginClick" class="btn btn-success login-button" data-dismiss="modal">登录</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane fade" id="register">
                <form class="form-horizontal login-form" id="login" role="form">
                  <div class="form-group has-feedback">
                    <label for="username-register" class="col-sm-2 control-label">用&nbsp;户&nbsp;&nbsp;名</label>
                    <div class="col-sm-10">
                      <span class="glyphicon glyphicon-user form-control-feedback" aria-hidden="true"></span>
                      <input type="text" class="form-control" id="username-register" placeholder="请输入用户名">
                    </div>
                  </div>
                  <div class="form-group has-feedback">
                    <label for="password" class="col-sm-2 control-label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                    <div class="col-sm-10">
                      <span class="glyphicon glyphicon-lock form-control-feedback" aria-hidden="true"></span>
                      <input type="password" class="form-control" id="password" placeholder="请输入密码">
                    </div>
                  </div>
                  <div class="form-group has-feedback">
                    <label for="password-again" class="col-sm-2 control-label">确认密码</label>
                    <div class="col-sm-10">
                      <span class="glyphicon form-control-feedback" v-bind:class="ConfirmPassword" aria-hidden="true"></span>
                      <input type="password" class="form-control" id="password-again" placeholder="请再次输入密码">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <button type="button" v-on:click="UserRegister" class="btn btn-success login-button">注册</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Cookies from 'js-cookie'

export default {
  name: 'navigation',
  data () {
    return {
      isSame: true,
      isLogin: false
    }
  },
  methods: {
    UserRegister: function () {
      this.isSame = $('#password').val() === $('#password-again').val()
    },
    LoginClick: function () {
      var username = $('#username-login').val()
      var password = $('#password-login').val()
      Cookies.set('username', username)
      Cookies.set('password', password)
      console.log(Cookies.get('username'))
      this.isLogin = true
    }
  },
  computed: {
    ConfirmPassword: function () {
      return {
        'glyphicon-ok': this.isSame,
        'glyphicon-remove': !this.isSame
      }
    }
  }
}
</script>

<style scrop>

.login-button {
  width: 100%;
}

.login-form {
  margin-top: 25px;
}

.mobile-searchbar {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.searchbar-form {
  border: none;
  margin-top: 0px;
  margin-bottom: 0px;
}

</style>
