import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'./home'
  },{
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home')
  },{
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },{
    path:'/category',
    name: 'category',
    component: () => import('../views/category/Category')
  },{
    path:'/cart',
    name :'cart',
    component: () => import('../views/cart/Cart')
  },{
    path:'/profile',
    name: 'profile',
    component: () => import('../views/profile/Profile')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
