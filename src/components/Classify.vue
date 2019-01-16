<template>
  <div class="panel panel-default">
    <div class="panel-body" id="my-board">
      <div id="list-head">商家分类：</div>
      <div>美团</div>
      <div>饿了么</div>
      <div>淘宝</div>
      <div>京东</div>
      <div>其他</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify'
}
</script>

<style>
#my-board {
  display: flex;
}

#my-board div {
  flex: 1;
}

</style>
