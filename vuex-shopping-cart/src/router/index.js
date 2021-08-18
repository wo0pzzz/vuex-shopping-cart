import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
