<template>
  <div class="navigation">
    <nav class="navbar navbar-default" role="navigation">
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
          <a class="navbar-brand" href="#">并夕夕</a>
        </div>
        <div class="collapse navbar-collapse" id="my-navigation">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a v-if="isLogin" href="#">我的</a>
              <a v-else href="#">登录</a>
            </li>
            <li>
              <a v-if="isLogin" href="#">注销</a>
              <a v-else href="#">注册</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    isLogin: Boolean
  }
}
</script>
