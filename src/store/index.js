import Vue from 'vue'
import Vuex from 'vuex'

import frontendNewcenter from './modules/frontend-newcenter'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        frontend: {
            namespaced: true,
            modules: {
                newscenter: frontendNewcenter
            }
        },
    }
})