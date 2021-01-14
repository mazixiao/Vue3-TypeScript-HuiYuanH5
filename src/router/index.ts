import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Enter from '../views/Enter.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'Enter',
    component: Enter,
    meta: {
      title: '进入页',
      index: 0
    }
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于我们',
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
