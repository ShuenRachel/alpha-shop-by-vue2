import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "checkout",
    component: Checkout,
  },
];

const router = new VueRouter({
  routes
})

export default router
