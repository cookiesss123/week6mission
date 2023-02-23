<template>
      <h1 class="text-center">後台產品列表</h1>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
            <RouterLink to="/home" class="nav-link">回到前台首頁</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">後台產品列表</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/admin/orders" class="nav-link">後台訂單列表</RouterLink>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="logout">登出</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div class="container">
        <RouterView></RouterView>
    </div>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router'
const { VITE_URL } = import.meta.env
export default {
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    logout () {
      document.cookie = `cookiesssToken=; expires=${new Date()}`
      this.$router.push('/login')
    },
    checkAdmin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)cookiesssToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${VITE_URL}/api/user/check`)
        .then(() => {
          // this.getProducts()
        }).catch(err => {
          console.log(err)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>

<style>
    .nav-link{
        font-size: 20px;
        font-weight: bold;
    }
</style>
