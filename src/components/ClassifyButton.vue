<template>
  <button type="button" id="all" @click="ChangeState" v-if="ShopName == '全部'" class="btn btn-default active">{{ShopName}}</button>
  <button type="button" @click="ChangeState" v-else class="btn btn-default">{{ShopName}}</button>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'ClassifyButton',
  props: {
    ShopName: String
  },
  methods: {
    ChangeState: function (event) {
      $('.btn').removeClass('active')
      $(event.currentTarget).addClass('active')
      this.$router.push({
        path: '/mid-layer/3/' + this.ShopName
      })
    }
  },
  mounted: function () {
    this.eventBus.$on('refresh', function (val) {
      $('.btn').removeClass('active')
      $('#all').addClass('active')
    })
  }
}
</script>

<style>

.btn,
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  border: none;
  outline: none;
}

</style>
