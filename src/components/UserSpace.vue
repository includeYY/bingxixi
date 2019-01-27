<template>
  <div>
    <bottom-nav />
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#my-navigation" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">并夕夕</router-link>
        </div>
        <div class="collapse navbar-collapse" id="my-navigation">
          <ul class="nav navbar-nav visible-xs">
            <li class="m-btn active" v-on:click="ChangeState"><router-link to="/user">资料设置</router-link></li>
            <li class="m-btn" v-on:click="ChangeState"><router-link to="/user/change-password">修改密码</router-link></li>
            <li class="m-btn" v-on:click="ChangeState"><router-link to="/user/mid-layer/1">正在进行的拼单</router-link></li>
            <li class="m-btn" v-on:click="ChangeState"><router-link to="/user/mid-layer/0">历史拼单</router-link></li>
            <li class="sidebar-btn m-btn" v-if="rights" v-on:click="ChangeState"><router-link to="/user/delete-user">管理用户</router-link></li>
            <li class="sidebar-btn m-btn" v-if="rights" v-on:click="ChangeState"><router-link to="/user/delete-bill">管理拼单</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active sidebar-btn m-btn" v-on:click="ChangeState"><router-link to="/user">资料设置</router-link></li>
            <li class="sidebar-btn m-btn" v-on:click="ChangeState"><router-link to="/user/change-password">修改密码</router-link></li>
            <li class="sidebar-btn m-btn" v-on:click="ChangeState"><router-link to="/user/mid-layer/1">正在进行的拼单</router-link></li>
            <li class="sidebar-btn m-btn" v-on:click="ChangeState"><router-link to="/user/mid-layer/0">历史拼单</router-link></li>
            <li class="sidebar-btn m-btn" v-if="rights" v-on:click="ChangeState"><router-link to="/user/delete-user">管理用户</router-link></li>
            <li class="sidebar-btn m-btn" v-if="rights" v-on:click="ChangeState"><router-link to="/user/delete-bill">管理拼单</router-link></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <transition name="right-fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/dashboard.css'
import BottomNav from './BottomNav.vue'

export default {
  name: 'UserSpace',
  components: {
    BottomNav
  },
  data () {
    return {
      rights: this.Cookie.get('rights') === 'a'
    }
  },
  methods: {
    ChangeState: function (event) {
      $('.m-btn').removeClass('active')
      $(event.currentTarget).addClass('active')
    }
  }
}
</script>

<style>
.right-fade-enter-active {
  transition: all .5s ease;
}
.right-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.main {
  padding: 20px;
}
</style>
