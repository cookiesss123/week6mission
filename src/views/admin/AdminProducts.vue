<template>
    <div>
        <table class="table">
        <thead>
            <tr>
                <th>分類</th>
                <th>產品名稱</th>
                <th>原價</th>
                <th>售價</th>
                <th>是否啟用</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.category }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.origin_price }}</td>
                <td>{{ product.price }}</td>
                <td :class="{'text-success':product.is_enabled, 'fw-bold':product.is_enabled}">{{`${product.is_enabled  ? '啟用' : '未啟用' }`}}</td>
            </tr>
        </tbody>
        </table>
    </div>

</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      // 要一直取得不知道為甚麼
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)cookiesssToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/products/all`)
        .then(res => {
          console.log(res.data.products)
          this.products = res.data.products
        }).catch(err => {
          console.log(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
