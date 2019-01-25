<template>
  <div>
    <div class="navigation">
      <nav class="navbar navbar-default visible-lg visible-md visible-sm" role="navigation">
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
                <router-link v-else to="/login-sign-up">登录/注册</router-link>
              </li>
              <li>
                <router-link v-if="isLogin" to="/" @click.native="Logout">注销</router-link>
              </li>
            </ul>
            <form class="navbar-form navbar-right" role="search">
              <div class="form-group">
                <input v-model="searchInfo" type="text" class="form-control" placeholder="拼单名称">
              </div>
              <button @click="Search" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <!-- 手机端顶部搜索栏 -->
      <nav class="navbar navbar-default mobile-searchbar visible-xs" role="navigation">
        <div class="container-fluid">
          <form class="navbar-form searchbar-form" role="search">
            <div class="form-group searchbar-form">
              <div class="col-xs-11" style="padding: 0px">
                <input type="search" v-model="searchInfo" class="form-control" placeholder="输入拼单信息">
              </div>
              <div class="col-xs-1" style="padding: 0px">
                <button @click="Search" type="button" class="btn btn-default" style="height: 34px">
                  <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navigation',
  data () {
    return {
      isLogin: typeof (this.Cookie.get('isLogin')) !== 'undefined',
      searchInfo: null
    }
  },
  methods: {
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
        this.isLogin = false
        console.log(this.Global.UserInfo.isLogin)
      }).catch((error) => {
        console.log(error)
      })
    },
    Search: function () {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.search_bill,
        data: this.qs.stringify({
          keyword: this.searchInfo
        })
      }).then((response) => {
        console.log('Search bill: ' + response)
        this.$router.push({
          path: '/bill-info',
          query: {
            bills: JSON.stringify(response.data.data.list)
          }
        })
      })
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
