import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

// const frontend_index = r => require.ensure([], () => r(require('@/pages/frontend-index')), 'frontend-index')

const en_index = r => require.ensure([], () => r(require('@/pages/en/en-index')), 'en-index')
const en_index_layout = r => require.ensure([], () => r(require('@/pages/en/en-index-layout')), 'en-index')
const en_about_us = r => require.ensure([], () => r(require('@/pages/en/en-about-us')), 'en-index')
const en_news_center = r => require.ensure([], () => r(require('@/pages/en/en-news-center')), 'en-index')
const en_cooperative_partner = r => require.ensure([], () => r(require('@/pages/en/en-cooperative-partner')), 'en-index')
const en_brand_culture = r => require.ensure([], () => r(require('@/pages/en/en-brand-culture')), 'en-index')
const en_development_history = r => require.ensure([], () => r(require('@/pages/en/en-development-history')), 'en-index')
const en_leadership_team = r => require.ensure([], () => r(require('@/pages/en/en-leadership-team')), 'en-index')

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
        { path: 'leadershipTeam', component: en_leadership_team },
        { path: 'developmentHistory', component: en_development_history },
        { path: 'newsCenter', component: en_news_center },
        { path: 'brandCulture', component: en_brand_culture },
        { path: 'cooperativePartner', component: en_cooperative_partner },
      ]
    },
    { 
      path:"/companyIndex",
      component: company_index
    }
  ]
})
