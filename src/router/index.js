import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id', // 動態
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'carts',
        component: () => import('../views/front/CartsView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
