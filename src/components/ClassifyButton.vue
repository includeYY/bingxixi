<template>
  <button type="button" v-on:click="ChangeState" v-if="ShopName == '全部'" class="btn btn-default active">{{ShopName}}</button>
  <button type="button" v-on:click="ChangeState" v-else class="btn btn-default">{{ShopName}}</button>
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
    }
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
