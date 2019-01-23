<template>
  <!-- 手机底部导航栏 -->
  <nav class="navbar navbar-default navbar-fixed-bottom bottom-nav visible-xs visible-sm" role="navigation">
    <div class="container-fluid bottom-container">
      <div class="row">
        <div class="col-xs-6 bottom-col">
          <button type="button" v-on:click="GoToIndex" class="btn btn-default navbar-btn bottom-btn">
            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
            <div class="text-center">主页</div>
          </button>
        </div>
        <div class="col-xs-6 bottom-col">
          <button type="button" v-on:click="GoToUserSpace" class="btn btn-default navbar-btn bottom-btn">
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
            <div class="text-center">我的</div>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
  methods: {
    GoToUserSpace: function () {
      this.$router.push('/user')
    },
    GoToIndex: function () {
      this.$router.push('/')
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
</style>
