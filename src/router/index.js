import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
      path: '/singleproducts/:id',
      name: 'singleproduct',
      component: function () {
        return import('../views/SingleProducts.vue')
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
