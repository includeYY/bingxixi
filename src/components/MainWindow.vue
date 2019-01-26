<template>
  <div id="main-window">
    <navigation />
    <classify />
    <transition name="right-fade">
      <router-view></router-view>
    </transition>
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
