import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addProduct',
    name: 'NewProducto',
    component: () => import('../views/NewProducto.vue')
  },
  {
    path: '/product',
    name: 'Product',
    componet : () => import('../components/Producto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router