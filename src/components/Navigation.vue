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
                <router-link v-if="this.Global.UserInfo.isLogin" to="/user">我的</router-link>
                <router-link v-else to="/login-sign-up">登录/注册</router-link>
              </li>
              <li>
                <a v-if="this.Global.UserInfo.isLogin" href="#">注销</a>
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

      <!-- 手机端顶部搜索栏 -->
      <nav class="navbar navbar-default mobile-searchbar visible-xs" role="navigation">
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
  </div>
</template>

<script>

export default {
  name: 'navigation'
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
