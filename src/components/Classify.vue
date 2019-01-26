<template>
  <div>
    <div class="panel panel-default classify-panel visible-lg visible-md visible-sm">
      <div class="table-responsive">
        <table class="table classify-table">
          <tbody>
            <tr>
              <td class="text-center">商家分类：</td>
              <td><classify-button shop-name="全部"/></td>
              <td><classify-button shop-name="美团"/></td>
              <td><classify-button shop-name="饿了么"/></td>
              <td><classify-button shop-name="淘宝"/></td>
              <td><classify-button shop-name="京东"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 手机上的分类栏 -->
    <div class="panel panel-default classify-panel visible-xs">
      <div class="container">
        <div class="row">
          <div class="col-xs-3 text-center classify-btn">
            <button @click="GetBills('饿了么')" type="button" class="btn btn-default">
              <img class="img-responsive center-block" src="../assets/images/eleme_logo.png">
              <span class="text-center">饿了么</span>
            </button>
          </div>
          <div class="col-xs-3 text-center classify-btn">
            <button @click="GetBills('美团')" type="button" class="btn btn-default">
              <img class="img-responsive center-block" src="../assets/images/meituan_logo.png">
              <span class="text-center">美团</span>
            </button>
          </div>
          <div class="col-xs-3 text-center classify-btn">
            <button @click="GetBills('淘宝')" type="button" class="btn btn-default">
              <img class="img-responsive center-block" src="../assets/images/taobao_logo.png">
              <span class="text-center">淘宝</span>
            </button>
          </div>
          <div class="col-xs-3 text-center classify-btn">
            <button @click="GetBills('京东')" type="button" class="btn btn-default">
              <img class="img-responsive center-block" src="../assets/images/jingdong_logo.png">
              <span class="text-center">京东</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassifyButton from './ClassifyButton.vue'

export default {
  name: 'classify',
  components: {
    ClassifyButton
  },
  methods: {
    GetBills: function (shopName) {
      this.$router.push({
        path: '/mid-layer/3/' + shopName
      })
    }
  }
}
</script>

<style scrop>

.classify-table tbody tr td {
  vertical-align: middle;
}

.classify-panel {
  margin-left: 0px;
  margin-right: 0px;
}

.classify-btn {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
}

@media (min-width: 992px) {
  .classify-panel{
    margin-left: 50px;
    margin-right: 50px;
  }
}

</style>
