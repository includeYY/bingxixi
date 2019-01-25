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
      if (this.ShopName === '全部') {
        this.GetAllBills()
      } else {
        console.log('Shopname' + this.ShopName)
        this.$axios({
          method: 'post',
          url: this.Global.SERVER_URL.list_by_shop,
          data: this.qs.stringify({
            shop: this.ShopName
          })
        }).then((response) => {
          console.log(response)
          if (response.data.status === 0) {
            if (response.data.data.list.length > 0) {
              this.$router.push({
                path: '/bill-info',
                query: {
                  bills: JSON.stringify(response.data.data.list)
                }
              })
            } else {
              alert('没有当前商家的拼单')
            }
          }
        }).catch((err) => {
          console.log(err)
        })
      }
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
