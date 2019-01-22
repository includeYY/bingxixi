<template>
  <div class="pc-panel panel panel-default bill-panel">
    <div class="panel-body">
      <div class="container">
        <div class="row">
          <div v-for="bill in bills" v-bind:key="bill.id" class="col-xs-12 col-md-3">
            <table class="table">
              <tbody>
                <tr>
                  <td rowspan="3">
                    <img v-bind:src="bill.imgsrc">
                  </td>
                  <td class="text-left" id="product-name">{{bill.product}}</td>
                </tr>
                <tr>
                  <td class="text-left">{{bill.shop}}</td>
                </tr>
                <tr>
                  <td class="text-left text-danger">{{bill.target}}</td>
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

<style scrope>

.bill-panel {
  margin-left: 5px;
  margin-right: 5px;
}

@media (min-width: 992px) {
  .bill-panel {
    margin-left: 50px;
    margin-right: 50px;
  }
}

#product-name {
  font-weight: bold;
  font-size: 120%;
}

</style>
