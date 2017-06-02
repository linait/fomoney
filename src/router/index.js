import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const index = r => require.ensure([], () => r(require('@/pages/frontend-index')), 'frontend-index')
const about = r => require.ensure([], () => r(require('@/pages/frontend-about')), 'frontend-about')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    { 
      path:"/index",
      component: index
    },
    { 
      path:"/about",
      component: about
    }
  ]
})
