<template>
    <div class="d-flex justify-content-center">
        <div class="col-10">
            <table class="table" style="vertical-align: middle;">
                <thead>
                    <tr>
                        <th>
                            <button type="button" class="btn btn-danger" @click="deleteAll">清空購物車</button>
                        </th>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart.carts" :key="item.id">
                        <td>
                            <button type="button" class="btn btn-outline-danger" @click="deleteItem(item)">移除購物車</button>
                        </td>
                        <td>{{ item.product.title }}</td>
                        <td class="text-end" style="width: 200px;">
                            <div class="input-group mb-3">
                                <select name="" id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)" :disabled="itemStatus === item.product.id">
                                    <option v-for="number in 20" :key="number" :value="number">
                                        {{ number }}
                                    </option>
                                </select>
                                <span class="input-group-text">{{ item.product.unit }}</span>
                            </div>
                        </td>
                        <td class="text-end">{{ item.final_total }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="text-end">總計</td>
                        <td class="text-end">{{cart.final_total}}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <!-- <div class="my-5 row justify-content-center">
          <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="onSubmit" >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field id="email" name="email" type="email" class="form-control"
                       :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" v-model="user.email"
                      ></Field>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                       placeholder="請輸入姓名" rules="required" v-model="user.name"></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                       placeholder="請輸入電話" :rules="isPhone" v-model="user.tel"></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                       placeholder="請輸入地址" rules="required" v-model="user.address"></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea id="message" class="form-control" cols="30" rows="10" v-model="user.message"></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger"
                      >送出訂單</button>
            </div>
          </Form>
        </div> -->
    </div>

</template>
<script>
// import { Field, Form, ErrorMessage } from 'vee-validate'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  components: {
    // Field, Form, ErrorMessage  form 與 html標籤重名沒辦法載入
  },
  data () {
    return {
      cart: {},
      itemStatus: ''
    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then(res => {
          console.log(res.data.data)
          this.cart = res.data.data
        }).catch(err => {
          console.log(err)
        })
    },
    updateCartItem (item) {
      this.itemStatus = item.product.id
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http.put(`${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then(res => {
          alert(res.data.message)
          this.getCarts()
          //   改變狀態
          this.itemStatus = ''
        }).catch(err => {
          console.log(err)
        })
    },
    deleteItem (item) {
      this.itemStatus = item.product.id
      this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`)
        .then(res => {
          alert(res.data.message)
          this.getCarts()
          //   改變狀態
          this.itemStatus = ''
        }).catch(err => {
          console.log(err)
        })
    },
    deleteAll () {
      this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
        .then(res => {
          alert(res.data.message)
          this.getCarts()
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
