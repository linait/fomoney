import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

const en_index = r => require.ensure([], () => r(require('@/pages/en/en-index')), 'en-index')
const index = r => require.ensure([], () => r(require('@/pages/frontend-index')), 'frontend-index')
const about = r => require.ensure([], () => r(require('@/pages/frontend-about')), 'frontend-about')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/en_index'
    },
    { 
      path:"/en_index",
      component: en_index
    },
    { 
      path:"/about",
      component: about
    }
  ]
})
