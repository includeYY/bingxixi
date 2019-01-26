<template>
  <div>
    <div v-if="isError" class="alert alert-danger">{{message}}</div>
    <form role="form">
      <div class="form-group">
        <label for="delete-username">用户名：</label>
        <input type="text" v-model="user" class="form-control" id="delete-username" placeholder="请输入要删除的用户名">
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-success pull-right" data-toggle="modal" data-target="#confirmDialog">删除用户</button>
      </div>
    </form>

    <div class="modal fade" id="confirmDialog" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">确认要删除用户'{{user}}'吗？</div>
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
  name: 'DeleteUser',
  data () {
    return {
      user: null,
      message: 'Hello',
      isError: false,
      id: null
    }
  },
  methods: {
    confirm: function () {
      if (!this.user) {
        this.isError = true
        this.message = '用户名不能为空'
      } else {
        this.isError = false
        console.log('user: ' + this.user)
        this.$axios({
          method: 'post',
          url: this.Global.SERVER_URL.check_user,
          data: this.qs.stringify({
            username: this.user
          })
        }).then((response) => {
          console.log(response)
          if (response.data.status === 0) {
            this.id = response.data.data.id
            this.Delete()
          } else {
            this.isError = true
            this.message = response.data.msg
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    Delete: function () {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.delete_client,
        data: {
          clientID: this.id
        }
      }).then((response) => {
        console.log(response)
        if (response.data.status === 0) {
          this.isError = true
          this.message = response.data.data
        } else {
          this.isError = true
          this.message = response.data.msg
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
