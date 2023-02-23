<template>
    產品列表
    <table class="table" style="vertical-align: middle;">
        <thead>
            <tr>
                <th>圖片</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td style="width: 300px;">
                    <div style="background-position: center; background-size: cover; height: 100px;;" :style="{'background-image':`url(${product.imageUrl})`}"></div>
                </td>
                <td>{{ product.title }}</td>
                <td>
                    <del>
                        原價 {{ product.origin_price }} 元
                    </del>
                    現在只要 {{ product.price }} 元
                </td>
                <td>
                    <div class="btn-group">
                        <RouterLink :to="`/product/${product.id}`" class="btn btn-sm btn-outline-secondary">查看更多</RouterLink>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="addCart(product.id)">加到購物車</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  components: {
    RouterLink
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then(res => {
          console.log(res.data.products)
          this.products = res.data.products
        }).catch(err => {
          console.log(err)
        })
    },
    addCart (productId, qty = 1) {
      const data = {
        product_id: productId,
        qty
      }
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
        .then(res => {
          alert(res.data.message)
          this.getCarts()
        }).catch(err => {
          console.log(err)
        })
    },
    getCarts () {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then(res => {
          console.log(res.data.data)
          this.cart = res.data.data
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
