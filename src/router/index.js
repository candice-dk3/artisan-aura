import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Items',
    name: 'Items',
    component: () => import('../views/Items.vue')
  },
  {
    path: '/$',
    name: '',
    component: () => import('../views/Item.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
