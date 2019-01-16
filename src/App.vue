<template>
  <div id="app">
    <navigation v-bind:is-login="false" />
    <classify />
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Classify from './components/Classify.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Classify
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
