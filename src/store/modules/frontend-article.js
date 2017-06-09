import api from '~api'
import {
    imgBaseUrl
} from '~config'
const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
const state = {
    lists: {
        data: [],
        hasNext: 0,
        pageNo: 1,
        totalPage: 0
    },
    item: {
        data: {},
        path:''
    }
}

const actions = {
    async ['getArticleList']({commit}, config) {
        // console.log('getArticleList:'+config);
        // console.log('getArticleList:'+path);
        const { data:{data, code }} = await api.get('/article/list', config)
        
        if (data && code === 200) {
            // console.log(config);
            commit('receiveArticleList', {
                ...config,
                ...data
            })
        }
    },
    async ['getArticleItem']({ commit, rootState: {route: { path, params: { id }}} }) {
        const { data: { data, code} } = await api.get('/article/item', { id })
        console.log(data);
        if (data && code === 200) {
            commit('receiveArticleItem', {
                data,
                path
            })
        }
    }
}

const mutations = {
    ['receiveArticleList'](state, {list, hasNext, hasPrev, pageNo, totalPage}) {
        list.map(function (v,i) {
            // console.log(v.originalImage);
            v.image = imgBaseUrl + v.image;
            v.originalImage = imgBaseUrl + v.originalImage;
            //日期格式化
        //    console.log(v.originalImage);
            var updateDate = v.updateDate;
            var updateDates = v.updateDate.split(' ')[0].split('-');
            // console.log(updateDates);
            // console.log(month[parseInt(updateDates[1])-1]);
            v.viewDate = {
                viewDay:updateDates[1]+'/'+updateDates[2],
                viewDayEn:month[parseInt(updateDates[1])-1]+' '+updateDates[2],
                viewYears:updateDates[0]
            }
            // console.log(v.viewDate);
        });
        if (pageNo === 1) {
            list = [].concat(list)
        } else {
            list = state.lists.data.concat(list)
        }
        state.lists = {
            data: list, hasNext, hasPrev, pageNo, totalPage
        }
    },
    ['receiveArticleItem'](state, {data, path}) {
        var updateDate = data.updateDate;
        var updateDates = data.updateDate.split(' ');
        data.viewDate = {
            viewDay:updateDates[0]
        }
        state.item = {
            data, path
        }
    }
}

const getters = {
    ['getArticleList'](state) {
        return state.lists
    },
    ['getArticleItem'](state) {
        return state.item
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
