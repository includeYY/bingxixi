<template>
  <div id="main-window">
    <navigation v-bind:is-login="false" />
    <classify />
    <bill-list v-bind:bills="bills"/>
  </div>
</template>

<script>
import Classify from './Classify.vue'
import BillList from './BillList.vue'
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
    BillList,
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
          this.bills = response.data.data.list
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
