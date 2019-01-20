<template>
  <div id="main-window">
    <navigation v-bind:is-login="true" />
    <classify />
    <bill-list v-bind:bills="bills"/>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Classify from './Classify.vue'
import BillList from './BillList.vue'

var mBills = [
  {
    id: 0,
    imgsrc: require('../assets/images/eleme.jpg'),
    product: '汉堡王',
    shop: '饿了么',
    target: '满30减10'
  },
  {
    id: 1,
    imgsrc: require('../assets/images/jingdong.jpg'),
    product: '汉堡王',
    shop: '京东',
    target: '满30减10'
  },
  {
    id: 2,
    imgsrc: require('../assets/images/meituan.jpg'),
    product: '香河肉饼',
    shop: '美团',
    target: '满30减10'
  },
  {
    id: 3,
    imgsrc: require('../assets/images/taobao.jpg'),
    product: 'MH世界',
    shop: '淘宝',
    target: '买二送一'
  },
  {
    id: 4,
    imgsrc: require('../assets/images/jingdong.jpg'),
    product: 'IKBC',
    shop: '京东',
    target: '满499减200'
  }
]

export default {
  name: 'MainWindow',
  data () {
    return {
      bills: mBills
    }
  },
  components: {
    Navigation,
    Classify,
    BillList
  }
}
</script>
