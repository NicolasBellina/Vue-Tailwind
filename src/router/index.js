import { createRouter, createWebHistory } from 'vue-router'

const routes = [


  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  { 
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },

  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: () => import('../views/forgotpassword.vue')
  },

  {
    path: '/erreur404',
    name: 'erreur404',
    component: () => import('../views/erreur404.vue')
  },
  
  {
    path: '/:pathMatch(.*)*',
    redirect: '/erreur404'
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router