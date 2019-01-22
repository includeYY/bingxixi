<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">并夕夕</router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active sidebar-btn" v-on:click="ChangeState"><router-link to="/user">资料设置</router-link></li>
            <li class="sidebar-btn" v-on:click="ChangeState"><router-link to="/user/message">消息通知</router-link></li>
            <li class="sidebar-btn" v-on:click="ChangeState"><router-link to="/user/bill-info">正在进行的拼单</router-link></li>
            <li class="sidebar-btn" v-on:click="ChangeState"><router-link to="/user/bill-info">已经结束的拼单</router-link></li>
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
import $ from 'jquery'

export default {
  name: 'UserSpace',
  methods: {
    ChangeState: function (event) {
      $('.sidebar-btn').removeClass('active')
      $(event.currentTarget).addClass('active')
    }
  }
}
</script>

<style>
.right-fade-enter-active {
  transition: all .5s ease;
}
.right-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
