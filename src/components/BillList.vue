<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="container">
        <div class="row">
          <div v-for="bill in bills" v-bind:key="bill.id" class="col-xs-6 col-md-3">
            <table class="table">
              <tbody>
                <tr>
                  <td rowspan="3">
                    <img v-bind:src="bill.imgsrc">
                  </td>
                  <td>{{bill.product}}</td>
                </tr>
                <tr>
                  <td>{{bill.shop}}</td>
                </tr>
                <tr>
                  <td>{{bill.target}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillList',
  props: {
    bills: Array
  }
}
</script>

<style>
.table {
  table-layout: fixed;
  border: 0px;
}

.table td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.table > tbody > tr > td {
    border: 0px;
}

</style>
