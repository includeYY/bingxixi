<template>
  <!-- 手机底部导航栏 -->
  <nav class="navbar navbar-default navbar-fixed-bottom bottom-nav visible-xs" role="navigation">
    <div class="container-fluid bottom-container">
      <div class="row">
        <div class="col-xs-4 bottom-col">
          <button type="button" v-on:click="GoToIndex" class="btn btn-default navbar-btn bottom-btn">
            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
            <div class="text-center">主页</div>
          </button>
        </div>
        <div class="col-xs-4 bottom-col">
          <button type="button" @click="GoToRelease" class="btn btn-default navbar-btn bottom-btn">
            <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
            <div class="text-center">发布订单</div>
          </button>
        </div>
        <div class="col-xs-4 bottom-col dropdown">
          <button type="button" class="btn btn-default navbar-btn bottom-btn" data-toggle="dropdown">
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
            <div class="text-center">我的</div>
          </button>
          <ul class="dropdown-menu">
            <li><button type="button" class="btn btn-default my-btn" @click="GoToUserSpace">个人中心</button></li>
            <li v-if="isLogin"><button type="button" class="btn btn-default my-btn" @click="Logout">注销</button></li>
            <li v-else><button type="button" class="btn btn-default my-btn" @click="Login">登录</button></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      isLogin: typeof (this.Cookie.get('isLogin')) !== 'undefined'
    }
  },
  methods: {
    GoToUserSpace: function () {
      if (typeof (this.Cookie.get('isLogin')) === 'undefined') {
        this.$router.push('/login-sign-up')
      } else {
        this.$router.push('/user')
      }
    },
    GoToIndex: function () {
      this.$router.push('/')
    },
    GoToRelease: function () {
      if (typeof (this.Cookie.get('isLogin')) === 'undefined') {
        this.$router.push('/login-sign-up')
      } else {
        this.$router.push('/release')
      }
    },
    Logout: function (event) {
      this.$axios({
        method: 'get',
        url: this.Global.SERVER_URL.logout
      }).then((response) => {
        console.log(response)
        this.Global.UserInfo.isLogin = false
        this.Global.UserInfo.username = ''
        this.Cookie.remove('username', { path: '' })
        this.Cookie.remove('password', { path: '' })
        this.Cookie.remove('isLogin', { path: '' })
        this.Cookie.remove('rights', { path: '' })
        this.isLogin = false
        console.log(this.Global.UserInfo.isLogin)
      }).catch((error) => {
        console.log(error)
      })
    },
    Login: function () {
      this.$router.push({
        path: '/login-sign-up'
      })
    }
  }
}
</script>

<style scoped>
.bottom-nav {
  background-color: #ffffff;
  border: none;
}

.bottom-container {
  padding: 0px;
}

.bottom-col {
  padding: 0px;
}

.bottom-btn {
  width: 100%;
  height: 100%;
  margin: 0px;
  border-radius: 0;
}

.my-btn {
  width: 100%;
}
</style>
