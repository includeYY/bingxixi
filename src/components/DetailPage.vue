<template>
  <div>
    <navigation />
    <div class="jumbotron">
      <span class="left"></span>
      <span class="right">
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
          <p><a class="btn btn-primary btn-lg aaa" href="#" role="button" @click="onClick()">加入拼单</a></p>
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
          <span>starttime</span>
        </div>
        <div style="display: none">{{billID}}</div>
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
@media screen and (min-width: 1200px){
  .left {
    width: 33.33%;
    height: 380px;
  }
  .right {
    top: 0;
    width: 66%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1200px){
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
@media screen and (min-width: 375px) and (max-width: 768px){
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
@media screen and (max-width: 375px){
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
      // 转base64码后的data字段
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
      billID: 6
    }
  },
  created: function () {
    let billInfo = JSON.parse(this.$route.query.billInfo)
    this.product = billInfo.product
    this.shop = billInfo.shop
    this.address = billInfo.address
    this.target = billInfo.target
    this.starttime = billInfo.starttime
    this.endtime = billInfo.endtime
    this.updatetime = billInfo.updatetime
    this.targetshow = true
    this.endtimeshow = true
    this.updatetimeshow = true
  },
  methods: {
    onClick: function () {
      // let formData = new FormData()
      // formData.append('billID', this.billID)
      // let config = {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }
      // //   url修改成服务url
      // axios.post('http://bingxixi.damneasy.top:8080/bill/manage/join_bill.do', formData, config).then((res) => {
      //   if (res.status === 404) {
      //     alert('404error')
      //   }
      //   if (res.data.status === 1) {
      //     alert('拼单不存在或已参加')
      //   }
      //   if (res.data.status === 10) {
      //     alert('未登录')
      //   }
      // })
    }
  },
  components: {
    Navigation
  }
}
</script>
