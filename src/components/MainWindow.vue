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
  methods: {
    GetAllBills: function () {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.get_active_list
      }).then((response) => {
        console.log(response)
        if (response.data.status === 0) {
          this.$router.push({
            path: '/bill-info',
            query: {
              bills: JSON.stringify(response.data.data.list)
            }
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created: function () {
    this.GetAllBills()
  }
}
</script>
