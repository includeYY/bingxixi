<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  created: function () {
    let username = this.Cookie.get('username')
    let password = this.Cookie.get('password')
    if (typeof (username) !== 'undefined') {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.login,
        data: this.qs.stringify({
          username: username,
          password: password
        })
      }).then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background: #f5f5f5;
  padding-bottom: 70px;
}

@media (min-width: 992px) {
  body {
    background: #f5f5f5;
  }
}
</style>
