<template>
  <div class="user-info">
    <div class="panel panel-default user-info-panel">
      <div class="panel-body">
        <div v-if="isSuccess" class="alert alert-success">{{message}}</div>
        <div v-if="isError" class="alert alert-danger">{{message}}</div>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-md-1 control-label" for="user-name">旧密码</label>
            <div class="col-md-11">
              <input type="password" class="form-control" id="user-name" v-model="oldpassword">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="age">新密码</label>
            <div class="col-md-11">
              <input type="password" class="form-control" v-model="newPassword">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="sex">确认密码</label>
            <div class="col-md-11">
              <input type="password" class="form-control" id="sex" v-model="confirmPassword">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-offset-1 col-md-11">
              <button type="button" @click="Change" class="btn btn-success pull-right">修改</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data () {
    return {
      oldpassword: '',
      newPassword: '',
      confirmPassword: '',
      isSuccess: false,
      isError: false,
      message: ''
    }
  },
  methods: {
    Change: function () {
      if (this.oldpassword !== '' && this.newPassword !== '' && this.confirmPassword !== '') {
        if (this.newPassword === this.confirmPassword) {
          this.$axios({
            method: 'post',
            url: this.Global.SERVER_URL.reset_password,
            data: this.qs.stringify({
              passwordOld: this.oldpassword,
              passwordNew: this.newPassword
            })
          }).then((response) => {
            if (response.data.status === 0) {
              this.isSuccess = true
              this.isError = false
              this.message = response.data.msg
            } else {
              this.isSuccess = false
              this.isError = true
              this.message = response.data.msg
            }
          }).catch((err) => {
            console.log(err)
          })
        } else {
          this.isSuccess = false
          this.isError = true
          this.message = '两次输入的密码不相同'
        }
      }
    }
  }
}
</script>
