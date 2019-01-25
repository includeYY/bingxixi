<template>
  <h1>正在中转...</h1>
</template>

<script>
export default {
  name: 'MidLayer',
  methods: {
    GetBillInfo: function (cas) {
      if (cas === 0) {
        this.$axios({
          method: 'post',
          url: this.Global.SERVER_URL.list_my_bill_all
        }).then((response) => {
          console.log('GetMyAllBill: ')
          console.log(response)
          if (response.data.status === 0) {
            this.$router.push({
              path: '/user/bill-info',
              query: JSON.stringify({
                bills: response.data.data.list
              })
            })
          } else {
            this.$router.push({
              path: '/'
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.$axios({
          method: 'post',
          url: this.Global.SERVER_URL.list_my_bill_all
        }).then((response) => {
          console.log('GetMyActiveBill: ')
          console.log(response)
          if (response.data.status === 0) {
            this.$router.push({
              path: '/user/bill-info',
              query: JSON.stringify({
                bills: response.data.data.list
              })
            })
          } else {
            this.$router.push({
              path: '/'
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  },
  mounted: function () {
    console.log(this.$route.params.cas)
    this.GetBillInfo(this.$route.params.cas)
  }
}
</script>
