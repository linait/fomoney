import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

const en_index = r => require.ensure([], () => r(require('@/pages/en/en-index')), 'en-index')
const company_index = r => require.ensure([], () => r(require('@/pages/company/company-index')), 'company_index')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/enIndex'
    },
    { 
      path:"/enIndex",
      component: en_index
    },
    { 
      path:"/companyIndex",
      component: company_index
    }
  ]
})
