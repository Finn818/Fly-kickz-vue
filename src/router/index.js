import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
      path: '/login',
      name: 'login',
      component: function () {
        return import('../views/LoginView.vue')
      }
    },
    {
      path: '/allproducts',
      name: 'allproducts',
      component: function () {
        return import('../views/AllProducts.vue')
      }
    },
    {
      path: '/singleproduct/:id',
      name: 'singleproduct',
      component: function () {
        return import('../views/SingleProduct.vue')
      },
      props: true
    },
    {
      path: '/admin',
      name: 'admin',
      component: function () {
        return import('../views/AdminView.vue')
      } 
    }
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
