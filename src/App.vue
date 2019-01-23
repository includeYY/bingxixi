<template>
  <div id="app">
    <navigation v-bind:is-login="false" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
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
