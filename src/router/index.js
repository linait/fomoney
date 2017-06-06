import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

// const frontend_index = r => require.ensure([], () => r(require('@/pages/frontend-index')), 'frontend-index')

const en_index = r => require.ensure([], () => r(require('@/pages/en/en-index')), 'en-index')
const en_index_layout = r => require.ensure([], () => r(require('@/pages/en/en-index-layout')), 'en-index')
const en_about_us = r => require.ensure([], () => r(require('@/pages/en/en-about-us')), 'en-index')
const company_index = r => require.ensure([], () => r(require('@/pages/company/company-index')), 'company-index')

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
      path:"/enIndex",
      component: en_index_layout,
      children:[
        { path: 'aboutUs', component: en_about_us },
        { path: 'leadershipTeam', component: en_about_us },
        { path: 'developmentHistory', component: en_about_us },
        { path: 'newsCenter', component: en_about_us },
        { path: 'brandCulture', component: en_about_us },
        { path: 'cooperativePartner', component: en_about_us },
      ]
    },
    { 
      path:"/companyIndex",
      component: company_index
    }
  ]
})
