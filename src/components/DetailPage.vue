<template>
  <div>
    <navigation />
    <div class="jumbotron">
      <span class="right" style="padding: 20px">
        <h3 class="head">{{product}}</h3>
        <div class="statement">
          <span>商家:</span>
          <span>{{shop}}</span>
        </div>
        <div class="statement" v-if="targetshow">
          <span>目标:</span>
          <span>{{target}}</span>
        </div>
        <div class="statement">
          <span>取货地址:</span>
          <span>{{address}}</span>
        </div>
        <div class="statement" v-if="endtimeshow">
          <span >截止时间:</span>
          <span>{{endtime}}</span>
        </div>
        <div class="statement">
          <p><a class="btn btn-primary btn-lg aaa" href="#" role="button" @click="onClick()" data-toggle="modal" data-target="#info-dialog">加入拼单</a></p>
        </div>
        <div class="statement">
          <p><a class="btn btn-primary btn-lg aaa" href="#" role="button" @click="Quit()" data-toggle="modal" data-target="#info-dialog">退出拼单</a></p>
        </div>
      </span>
    </div>
    <div class="jumbotron">
      <h2 style="font-family: cursive; padding-left: 20px;">拼单详情</h2>
      <div style="padding-left:20px;">
        <div class="statement">
          <span>商品名:</span>
          <span>{{product}}</span>
        </div>
        <div class="statement">
          <span>商家:</span>
          <span>{{shop}}</span>
        </div>
        <div class="statement">
          <span>取货地址:</span>
          <span>{{address}}</span>
        </div>
        <div class="statement" v-if="targetshow">
          <span >目标:</span>
          <span>{{target}}</span>
        </div>
        <div class="statement" >
          <span >开始时间:</span>
          <span>{{starttime}}</span>
        </div>
        <div class="statement" v-if="endtimeshow">
          <span >截止时间:</span>
          <span>{{endtime}}</span>
        </div>
        <div class="statement" v-if="updatetimeshow">
          <span >更新日期:</span>
          <span>{{updatetime}}</span>
        </div>
        <div class="statement">
          <span >联系方式:</span>
          <span>{{contact}}</span>
        </div>
        <div style="display: none">{{billID}}</div>
      </div>
    </div>

    <div class="modal fade" id="info-dialog" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">
            <div class="statement" style="margin-left: 0px">
              <div v-if="isSuccess" class="alert alert-success">{{message}}</div>
              <div v-if="isError" class="alert alert-danger">{{message}}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.aaa{
  width: 200px;
  margin-top: 40px;
}
.statement{
  padding-top: 10px;
  font-size: 23px;
  font-weight: 200;
  font-family: cursive;
}
.head {
  font-size: 40px;
  font-weight: 700;
}
.jumbotron{
  background-color: white;
  overflow-y: auto;
}
.left {
  display:inline-block;
  background-repeat: no-repeat;
  background-position : center;
  background-size: cover;
}
.right{
  padding-left: 15px;
  overflow: hidden;
  float: right;
}
@media (min-width: 1200px){
  .left {
    width: 33.33%;
    height: 380px;
  }
  .right {
    top: 0;
    width: 66%;
  }
  .jumbotron{
    background-color: white;
    overflow-y: auto;
    margin-left: 50px;
    margin-right: 50px;
  }
}
@media (min-width: 768px) and (max-width: 1200px){
  .left {
    width: 33.33%;
    height: 240px;
  }
  .right {
    top: 0;
    width: 66%;
  }
  .jumbotron{
    background-color: white;
    overflow-y: auto;
    margin-left: 50px;
    margin-right: 50px;
  }
}
@media (min-width: 375px) and (max-width: 768px){
  .left {
    width: 100%;
    height: 315px;
  }
  .right {
    padding-left: 0;
    top: 0;
    width: 100%;
  }
}
@media (max-width: 375px){
  .left {
    padding-left: 0;
    width: 100%;
    height: 315px;
  }
  .right {
    top: 0;
    width: 66%;
  }
}
</style>
<script>
import Navigation from './Navigation.vue'

export default {
  data () {
    return {
      product: '',
      shop: '',
      address: '',
      target: '',
      starttime: '',
      endtime: '',
      updatetime: '',
      targetshow: false,
      endtimeshow: false,
      updatetimeshow: false,
      billID: '',
      message: '',
      isSuccess: false,
      isError: false,
      contact: ''
    }
  },
  created: function () {
    let billInfo = JSON.parse(this.$route.query.billInfo)
    this.product = billInfo.product
    this.shop = billInfo.shop
    this.address = billInfo.address
    this.target = billInfo.target
    this.starttime = this.GetTime(billInfo.starttime)
    this.endtime = this.GetTime(billInfo.endtime)
    this.updatetime = this.GetTime(billInfo.updatetime)
    this.billID = billInfo.id
    this.targetshow = true
    this.endtimeshow = true
    this.updatetimeshow = true
    this.contact = billInfo.contact_img
  },
  methods: {
    onClick: function () {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.join_bill,
        data: this.qs.stringify({
          billID: this.billID
        })
      }).then((response) => {
        console.log(response)
        if (response.data.status === 0) {
          this.isSuccess = true
          this.isError = false
          this.message = response.data.data
        } else {
          this.isError = true
          this.isSuccess = false
          this.message = response.data.msg
        }
      })
    },
    GetTime: function (time) {
      let mTime = new Date(time)
      return mTime.toLocaleDateString().replace(/\//g, '-') + ' ' + mTime.toTimeString().substr(0, 8)
    },
    Quit: function () {
      this.$axios({
        method: 'post',
        url: this.Global.SERVER_URL.quit_bill,
        data: this.qs.stringify({
          billID: this.billID
        })
      }).then((response) => {
        if (response.data.status === 0) {
          this.isSuccess = true
          this.isError = false
          this.message = response.data.data
        } else {
          this.isError = true
          this.isSuccess = false
          this.message = response.data.msg
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    Navigation
  }
}
</script>
