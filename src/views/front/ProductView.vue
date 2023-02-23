<template>
    單一產品列表
    <div class="row g-5">
        <div class="col-6">
            <img :src="product.imageUrl" alt="" class="mb-2" style="width: 500px;">
            <img v-for="pic in product.imagesUrl" :key="pic" :src="pic" alt="" width="200">
        </div>
        <div class="col-6">
            <h1>
                <span class="badge bg-primary rounded-pill">{{product.category}}</span>
                {{ product.title }}
            </h1>
            <h4>
                商品尺寸：{{product.content}} <br>
                商品內容：{{product.description}} <br>
                <del>
                    原價 {{ product.origin_price }} 元
                </del><br>
                現在只要 {{ product.price }} 元
                <div class="input-group mb-3">
                    <!-- <input type="text" class="form-control"> -->
                    <select name="" id="" class="form-select" v-model="qty">
                        <option v-for="number in 20" :key="number" :value="number">
                            {{ number }}
                        </option>
                    </select>
                    <button class="btn btn-primary" type="button" @click="addCart(product.id, qty)">加入購物車</button>
                </div>
            </h4>
        </div>
    </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      product: [],
      qty: 1
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then(res => {
          console.log(res.data.product)
          this.product = res.data.product
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
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
