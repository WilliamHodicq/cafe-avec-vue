import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from "../views/Contact";

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  mode:"history",
  history: createWebHashHistory(),
  routes
})

export default router