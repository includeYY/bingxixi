<template>
  <div class="panel panel-default">
    <div class="table-responsive">
      <table class="table">
        <tbody>
          <tr>
            <td class="text-center">商家分类：</td>
            <td><classify-button shop-name="美团"/></td>
            <td><classify-button shop-name="饿了么"/></td>
            <td><classify-button shop-name="淘宝"/></td>
            <td><classify-button shop-name="京东"/></td>
            <td><classify-button shop-name="其他"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ClassifyButton from './ClassifyButton.vue'

export default {
  name: 'classify',
  components: {
    ClassifyButton
  }
}
</script>

<style>

.panel {
  margin-left: 50px;
  margin-right: 50px;
}

.table tbody tr td {
  vertical-align: middle;
}

</style>
