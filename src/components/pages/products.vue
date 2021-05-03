<template>
    <div>
        <div class="text-right">
            <button class="btn btn-primary mt-4" @click="openModal">建立新的產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">分類</th>
                    <th>產品名稱</th>
                    <th width="120">原價</th>
                    <th width="120">售價</th>
                    <th width="100">是否啟用</th>
                    <th width="80">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in products" :key="item.key">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">
                        {{item.origin_price}}
                    </td>
                    <td class="text-right">
                        {{item.price}}
                    </td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      products: [],
      tempProduct: {}
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`
      const vm = this
      console.log(process.env.APIPATH, process.env.CUSTOMPATH)
      this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.products = response.data.products
      })
    },
    openModal () {
      $('#productModal').modal('show')
    }
    // updateProduct(){
    //     const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`
    //     const vm = this
    //     console.log(process.env.APIPATH, process.env.CUSTOMPATH)
    //     this.$http.post(api,{data:vm.tempProduct}).then((response) => {
    //     console.log(response.data)
    //     if (response.data.success) {
    //         $('#productModal').modal('hide');
    //         vm.getProducts();
    //     } else {
    //         $('#productModal').modal('hide');
    //         vm.getProducts();
    //         console.log('新增失敗');
    //     }
    //     })
    // }
  },
  created () {
    this.getProducts()
  }
}
</script>
