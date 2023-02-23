<template>
    <div class="d-flex flex-column align-items-center">
        <h1 class="text-center">
            登入
        </h1>
        <div class="col-6">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.username">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="d-flex mt-3">
                <button type="submit" class="btn btn-primary ms-auto" @click.prevent="login">登入</button>
            </div>
        </div>
    </div>
</template>
<script>
const { VITE_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_URL}/admin/signin`, this.user)
        .then(res => {
          const { expired, token } = res.data
          document.cookie = `cookiesssToken=${token}; expires=${new Date(expired)}`
          this.$router.push('/admin/products')
        }).catch(err => {
          console.log(err.response.data.message)
        })
    }
  }
}

</script>
