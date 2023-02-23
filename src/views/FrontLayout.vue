<template>
    <h1 class="text-center">你現在在前台頁面</h1>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
            <RouterLink to="/home" class="nav-link">首頁</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/products" class="nav-link">前台產品列表</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/carts" class="nav-link">前台購物車</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">後台產品</RouterLink>
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
export default {
  components: {
    RouterView,
    RouterLink
  }
}
</script>

<style>
    .nav-link{
        font-size: 20px;
        font-weight: bold;
    }
</style>
