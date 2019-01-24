<template>
  <div class="user-info">
    <div class="panel panel-default user-info-panel">
      <div class="panel-body">
        <div v-if="isSave" class="alert alert-success">保存成功</div>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-md-1 control-label" for="user-name">用户名</label>
            <div class="col-md-11">
              <input type="text" class="form-control" readonly="readonly" id="user-name" v-model="userName">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="age">年龄</label>
            <div class="col-md-11">
              <input type="text" class="form-control" v-model="age">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="sex">性别</label>
            <div class="col-md-11">
              <input type="text" class="form-control" id="sex" v-model="sex">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="tel">联系方式</label>
            <div class="col-md-11">
              <input type="text" class="form-control" id="tel" v-model="tel">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="address">常用地址</label>
            <div class="col-md-11">
              <input type="text" class="form-control" id="address" v-model="address">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-offset-1 col-md-11">
              <button type="button" @click="SaveInfo" class="btn btn-success pull-right">保存</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userName: '',
      age: '',
      tel: '',
      sex: '',
      address: '',
      isSave: false
    }
  },
  created: function () {
    this.$axios({
      method: 'post',
      url: this.Global.SERVER_URL.get_user_info
    }).then((response) => {
      console.log(response)
      if (response.data.status === 0) {
        this.userName = response.data.data.username
        this.age = response.data.data.age
        this.sex = response.data.data.sex
        this.tel = response.data.data.tel
        this.address = response.data.data.address
        console.log(this.userName)
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    SaveInfo: function () {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.update_information,
        data: this.qs.stringify({
          age: this.age,
          sex: this.sex,
          tel: this.tel,
          address: this.address
        })
      }).then((response) => {
        if (response.data.status === 0) {
          this.isSave = true
        } else {
          console.log(response)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
