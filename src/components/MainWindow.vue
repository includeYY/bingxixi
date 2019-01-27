<template>
  <div id="main-window">
    <navigation />
    <classify />
    <transition name="right-fade">
      <router-view></router-view>
    </transition>
    <bottom-nav />
  </div>
</template>

<script>
import Classify from './Classify.vue'
import Navigation from './Navigation.vue'
import BottomNav from './BottomNav.vue'

export default {
  name: 'MainWindow',
  data () {
    return {
      bills: []
    }
  },
  components: {
    Classify,
    Navigation,
    BottomNav
  },
  created: function () {
    this.GetAllBills()
  }
}
</script>
