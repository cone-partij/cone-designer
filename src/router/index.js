import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/",
    hidden: true,
    children: [
      {
        name: "Home",
        path: "/",
        component: () => import("@/views/Home")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
