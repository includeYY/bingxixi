<template>
  <div>
    <table class="table table-striped">
      <caption>点击表格可查看订单详细信息</caption>
      <thead>
        <tr>
          <th>商品</th>
          <th>商家</th>
          <th>拼单目标</th>
          <th>取货地址</th>
          <th>参与人数</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="BillClick(bill)" v-for="bill in bills" :key="bill.id">
          <td>{{bill.product}}</td>
          <td>{{bill.shop}}</td>
          <td>{{bill.target}}</td>
          <td>{{bill.address}}</td>
          <td>{{bill.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BillInfo',
  data () {
    return {
      bills: []
    }
  },
  methods: {
    BillClick: function (bill) {
      this.$router.push({
        path: '/detail',
        query: {
          billInfo: JSON.stringify(bill)
        }
      })
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
