<template>
  <div id="main-window">
    <navigation v-bind:is-login="false" />
    <classify />
    <router-view></router-view>
  </div>
</template>

<script>
import Classify from './Classify.vue'
import Navigation from './Navigation.vue'

export default {
  name: 'MainWindow',
  data () {
    return {
      bills: []
    }
  },
  components: {
    Classify,
    Navigation
  },
  created: function () {
    this.GetAllBills()
  }
}
</script>
