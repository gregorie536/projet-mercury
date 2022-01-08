import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mentionslegales',
    name: 'MentionsLegales',
    component: () => import('../views/MentionsLegales.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/film',
    name: 'Film',
    component: () => import('../views/Film.vue')
  },
  {
    path: '/livre',
    name: 'Livre',
    component: () => import('../views/Livre.vue')
  },
  {
    path: '/goodies',
    name: 'Goodies',
    component: () => import('../views/Goodies.vue')
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: () => import('../views/Galerie.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/PageNotFound.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
