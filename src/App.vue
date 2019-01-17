<template>
  <div id="app">
    <navigation v-bind:is-login="false" />
    <classify />
    <bill-list v-bind:bills="bills"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Classify from './components/Classify.vue'
import BillList from './components/BillList.vue'

var mBills = [
  {
    id: 0,
    imgsrc: require('./assets/eleme.jpg'),
    product: '汉堡王',
    shop: '饿了么',
    target: '满30减10'
  },
  {
    id: 0,
    imgsrc: require('./assets/jingdong.jpg'),
    product: '汉堡王',
    shop: '饿了么',
    target: '满30减10'
  },
  {
    id: 0,
    imgsrc: require('./assets/meituan.jpg'),
    product: '汉堡王',
    shop: '饿了么',
    target: '满30减10'
  },
  {
    id: 0,
    imgsrc: require('./assets/taobao.jpg'),
    product: '汉堡王',
    shop: '饿了么',
    target: '满30减10'
  },
  {
    id: 0,
    imgsrc: require('./assets/jingdong.jpg'),
    product: '汉堡王',
    shop: '饿了么',
    target: '满30减10'
  }
]

export default {
  name: 'app',
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
