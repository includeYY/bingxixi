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
    },
    Search: function () {
      console.log('搜索')
      console.log(this.$route.params.key)
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.search_bill,
        data: this.qs.stringify({
          keyword: this.$route.params.key
        })
      }).then((response) => {
        console.log('Search bill: ')
        console.log(response)
        this.$router.push({
          path: '/bill-info',
          query: {
            bills: JSON.stringify(response.data.data.list)
          }
        })
      })
    },
    GetBillByShop: function () {
      console.log('分类')
      let ShopName = this.$route.params.key
      if (ShopName === '全部') {
        this.GetAllBills()
      } else {
        this.$axios({
          method: 'post',
          url: this.Global.SERVER_URL.list_by_shop,
          data: this.qs.stringify({
            shop: ShopName
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
              this.GetAllBills()
            }
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  },
  mounted: function () {
    let cas = this.$route.params.cas
    console.log(cas)
    if (cas === '0') {
      this.GetBillInfo(0)
    } else if (cas === '1') {
      this.GetBillInfo(1)
    } else if (cas === '2') {
      this.Search()
    } else if (cas === '3') {
      this.GetBillByShop()
    }
  }
}
</script>
