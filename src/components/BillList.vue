<template>
  <div class="pc-panel panel panel-default bill-panel">
    <div class="panel-body">
      <div class="container">
        <div class="row">
          <div v-for="bill in bills" v-bind:key="bill.id" class="col-xs-12 col-sm-4 col-md-3">
            <table class="table">
              <tbody>
                <tr>
                  <td rowspan="3">
                    <img v-bind:src="GetImg(bill)">
                  </td>
                  <td class="text-left" id="product-name">{{bill.product}}</td>
                </tr>
                <tr>
                  <td class="text-left">{{bill.shop}}</td>
                </tr>
                <tr>
                  <td class="text-left">{{bill.address}}</td>
                </tr>
                <tr>
                  <td class="text-left text-danger">{{bill.target}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillList',
  data () {
    return {
      bills: []
    }
  },
  methods: {
    GetImg: function (bill) {
      switch (bill.shop) {
        case '美团': return require('../assets/images/meituan.jpg')
        case '饿了么': return require('../assets/images/eleme.jpg')
        case '淘宝': return require('../assets/images/taobao.jpg')
        case '京东': return require('../assets/images/jingdong.jpg')
      }
    }
  },
  created: function () {
    let list = this.$route.query.bills
    if (typeof (list) !== 'undefined') {
      if (list.length > 0) {
        this.bills = JSON.parse(list)
        console.log(this.bills)
      }
    } else {
      alert('当前没有订单')
    }
  }
}
</script>

<style scrope>

.bill-panel {
  margin-left: 0px;
  margin-right: 0px;
}

@media (min-width: 992px) {
  .bill-panel {
    margin-left: 50px;
    margin-right: 50px;
  }
}

#product-name {
  font-weight: bold;
  font-size: 120%;
}

</style>
