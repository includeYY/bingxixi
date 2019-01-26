<template>
  <div class="release">
    <div class="panel panel-default bargin-info-panel">
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
            <div class="col-md-offset-1 col-md-11">
              <button
                type="submit"
                class="btn btn-success pull-right"
                style="width:200px"
                id="releaseBtn"
                @click="onSubmit($event)"
              >发布</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileInput from './FileInput.vue'

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
      hour: 0
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
      formData.append('target', this.target)
      formData.append('endTime', endTime)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      //   url修改成服务url
      this.$axios.post(
        this.Global.SERVER_URL.create_bill,
        formData,
        config
      ).then((res) => {
        if (res.status === 404) {
          alert('404')
        } else {
          if (res.data.status === 10) {
            alert('登陆界面')
            //    跳转
          } else {
            alert('成功发布')
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    FileInput
  }
}
</script>

<style scoped>
.my-publish {
  margin-top: 100px;
}

m-block {
  min-width: 220px;
  width: 400px;
  min-height: 270px;
}
</style>
