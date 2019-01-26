<template>
  <div class="release">
    <navigation />
    <div class="panel panel-default release-panel">
      <div class="panel-body">
        <div class="my-publish">
          <form class="form-horizontal" role="form" id="form1">
            <div class="form-group">
              <label class="col-md-1 control-label">商品</label>
              <div class="col-md-11">
                <input type="text" class="form-control" v-model="barginName">
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-md-3 m-block">
                  <label class="control-label">商品图示</label>
                  <div class="form-group">
                    <div class="col-md-11">
                      <file-input id="fileInput1" postUrl="aaa">错误</file-input>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-md-3 m-block">
                  <div class="form-group">
                    <div class="col-md-11">
                      <label class="control-label">联系方式/二维码</label>
                      <file-input id="fileInput2" postUrl="bbb">错误</file-input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1 control-label">商家</label>
              <div class="col-md-11">
                <input type="url" class="form-control" v-model="shopName">
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1 control-label">取货地点</label>
              <div class="col-md-11">
                <input type="text" class="form-control" v-model="addr">
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1 control-label">拼单目标</label>
              <div class="col-md-11">
                <input type="text" class="form-control" v-model="target">
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1 control-label">结束时间</label>
              <div class="col-md-11">
                <div class="input-group">
                  <span>
                    <input type="number" class="form-control" v-model="day" min="0">
                  </span>
                  <span class="input-group-addon">天</span>
                  <span>
                    <input type="number" class="form-control" v-model="hour" max="23" min="0">
                  </span>
                  <span class="input-group-addon">小时</span>
                  <span>
                    <input type="number" class="form-control" v-model="minute" max="59" min="0">
                  </span>
                  <span class="input-group-addon">分钟</span>
                </div>
                <!-- <input type="datetime" class="form-control" v-bind:value="timenow"> -->
              </div>
            </div>
            <div class="from-group">
              <div class="alert alert-success" v-if="isSuccess">{{message}}</div>
              <div class="alert alert-danger" v-if="isError">{{message}}</div>
            </div>
            <div class="form-group">
              <div class="col-md-offset-1 col-md-11">
                <button
                  type="button"
                  class="btn btn-success pull-right"
                  style="width:200px"
                  id="releaseBtn"
                  @click="onSubmit($event)"
                >发布</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileInput from './FileInput.vue'
import Navigation from './Navigation.vue'

export default {
  name: 'Release',
  data () {
    return {
      barginName: '',
      shopName: '',
      addr: '',
      target: '',
      day: 0,
      minute: 0,
      hour: 0,
      isSuccess: false,
      isError: false,
      message: ''
    }
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      let formData = new FormData()
      var date = new Date()
      formData.append('product', this.barginName)
      formData.append('shop', this.shopName)
      formData.append('address', this.addr)
      formData.append('billID', date.getSeconds() + date.getMilliseconds())
      var startTime =
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes() +
        ':' +
        date.getSeconds()
      formData.append('startTime', startTime)
      date.setMinutes(Number(date.getMinutes()) + Number(this.minute))
      date.setHours(Number(date.getHours()) + Number(this.hour))
      date.setDate(Number(date.getDate()) + Number(this.day))
      var endTime =
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes() +
        ':' +
        date.getSeconds()

      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.create_bill,
        data: this.qs.stringify({
          product: this.barginName,
          shop: this.shopName,
          address: this.addr,
          startTime: startTime,
          endTime: endTime,
          target: this.target,
          product_img: '',
          contact_img: ''
        })
      }).then((response) => {
        if (response.data.status === 0) {
          this.isSuccess = true
          this.message = response.data.data
        } else {
          this.isError = true
          this.message = response.data.data
        }
      })
    }
  },
  components: {
    FileInput,
    Navigation
  }
}
</script>

<style scoped>
m-block {
  min-width: 220px;
  width: 400px;
  min-height: 270px;
}

.release-panel {
  margin-left: 0px;
  margin-right: 0px;
}

@media (min-width: 992px) {
  .release-panel{
    margin-left: 50px;
    margin-right: 50px;
  }
}
</style>
