<template>
  <div>
    <div v-if="isError" class="alert alert-danger">{{message}}</div>
    <form role="form">
      <div class="form-group">
        <label for="bill-id">拼单号：</label>
        <input type="text" v-model="billID" class="form-control" id="bill-id" placeholder="请输入要删除的拼单号">
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-success pull-right" data-toggle="modal" data-target="#confirmDialog">删除拼单</button>
      </div>
    </form>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>商家</th>
          <th>商品</th>
          <th>发起人ID</th>
          <th>取货地址</th>
          <th>参与人数</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="BillClick" v-for="bill in bills" :key="bill.id">
          <td>{{bill.id}}</td>
          <td>{{bill.shop}}</td>
          <td>{{bill.product}}</td>
          <td>{{bill.leaderID}}</td>
          <td>{{bill.address}}</td>
          <td>{{bill.status}}</td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="confirmDialog" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">确认要删除订单'{{billID}}'吗？</div>
          <div class="modal-footer">
            <button type="button" @click="confirm" class="btn btn-danger" data-dismiss="modal">确定</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteBill',
  data () {
    return {
      isError: false,
      message: null,
      billID: null,
      bills: []
    }
  },
  methods: {
    confirm: function () {
      if (!this.user) {
        this.isError = true
        this.message = '订单号不能为空'
      } else {
        this.isError = false
        this.$axios({
          method: 'post',
          url: this.Global.SERVER_URL.delete_bill,
          data: {
            billID: this.billID
          }
        }).then((response) => {
          if (response.data.status === 0) {
            this.isError = true
            this.message = response.data.data
            this.GetBills()
          } else {
            this.isError = true
            this.message = response.data.msg
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    GetBills: function () {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.get_active_list
      }).then((response) => {
        console.log('delete-bill: ')
        console.log(response)
        if (response.data.status === 0) {
          let list = response.data.data.list
          if (list.length > 0) {
            this.bills = list
          } else {
            this.isError = true
            this.message = '当前没有订单'
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    BillClick: function () {
      alert('Hello')
    }
  },
  created: function () {
    this.GetBills()
  }
}
</script>
