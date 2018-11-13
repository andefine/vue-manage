import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout.vue'

Vue.use(Router)

/**
 * Layout公用组件
 */

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Layout
    },
    {
      path: '/sale',
      name: 'sale',
      component: Layout,
      children: [
        {
          path: 'container',
          name: 'container',
          component: () => import('@/views/sale/Container')
        }
      ]
    }
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: () => import('@/views/Test')
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
