<template>
  <div class="pc-panel panel panel-default visible-lg visible-md">
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

.classify-table tbody tr td {
  vertical-align: middle;
}

</style>
