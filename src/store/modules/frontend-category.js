import api from '~api'

const state = {
    lists: {
        data: []
    }
}

const actions = {
    async ['getCategoryList']({commit}, config) {
        const { data:{data, code }} = await api.get('/category/list', config)
        
        if (data && code === 200) {
            commit('receiveCategoryList', {
                ...config,
                ...data
            })
        }
    }
}

const mutations = {
    ['receiveCategoryList'](state, {list}) {
        state.lists = {
            data: list
        }
    }
}

const getters = {
    ['getCategoryList'](state) {
        return state.lists
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
