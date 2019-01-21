<template>
  <div class="user-info">
    <div class="panel panel-default user-info-panel">
      <div class="panel-body">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-md-1 control-label" for="user-name">用户名</label>
            <div class="col-md-11">
              <input type="text" class="form-control" readonly="readonly" id="user-name" v-bind:value="userName">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="age">年龄</label>
            <div class="col-md-11">
              <input type="text" class="form-control" id="age" v-bind:value="age">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="sex">性别</label>
            <div class="col-md-11">
              <input type="text" class="form-control" id="sex" v-bind:value="sex">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="tel">联系方式</label>
            <div class="col-md-11">
              <input type="text" class="form-control" id="tel" v-bind:value="tel">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-1 control-label" for="address">常用地址</label>
            <div class="col-md-11">
              <input type="text" class="form-control" id="address" v-bind:value="address">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-offset-1 col-md-11">
              <button type="submit" class="btn btn-success pull-right">保存</button>
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
      userName: 'LePetit',
      age: 21,
      tel: '15810135518',
      sex: '男',
      address: '北京理工大学'
    }
  }
}
</script>
