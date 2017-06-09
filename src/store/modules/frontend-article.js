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
        data: {}
    }
}

const actions = {
    async ['getArticleList']({commit}, config) {
        // console.log('getArticleList:'+config);
        // console.log('getArticleList:'+path);
        const { data:{data, code }} = await api.get('/article/list', config)
        // const { data, code } = {
           
        //     data:{
        //         list:[
        //             {
        //                 title:'测试标题',
        //                 description:'4月26日上午，筹备已久的复星大健康管理学院正式成立。复星集团联席总裁、复星医药董事长陈启宇，复星医药总裁兼CEO吴以芳，复星健康控股人力资源总经理、复星医药高级副总裁陈玉卿共同为学院成立揭幕。',
        //                 content:'正文',
        //                 createtime:'20170606',
        //             }
        //         ],
        //         total:1,
        //         hasNext:1,
        //         hasPrev:false
        //     },
        //     code:200
        // }
        
        if (data && code === 200) {
            // console.log(config);
            commit('receiveArticleList', {
                ...config,
                ...data
            })
        }
    }
    // ,
    // async ['getArticleItem']({ commit, rootState: {route: { path, params: { id }}} }) {
    //     const { data: { data, code} } = await api.get('frontend/article/item', { markdown: 1, id })
    //     if (data && code === 200) {
    //         commit('receiveArticleItem', {
    //             data,
    //             path
    //         })
    //     }
    // },
    // async ['getTrending']({ commit }) {
    //     const { data: { data, code} } = await api.get('frontend/trending')
    //     if (data && code === 200) {
    //         commit('receiveTrending', data)
    //     }
    // }
}

const mutations = {
    ['receiveArticleList'](state, {list, hasNext, hasPrev, pageNo, totalPage}) {
        // console.log('receiveArticleList:'+list);
        // console.log(imgBaseUrl);
        list.map(function (v,i) {
            // console.log(v.originalImage);
            v.image = imgBaseUrl + v.image;
            v.originalImage = imgBaseUrl + v.originalImage;
            //日期格式化
           console.log(v.originalImage);
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
    }
    // ,
    // ['receiveArticleItem'](state, {data, path}) {
    //     state.item = {
    //         data, path
    //     }
    // },
    // ['receiveTrending'](state, data) {
    //     state.trending = data.list
    // }
}

const getters = {
    ['getArticleList'](state) {
        return state.lists
    }
    // ,
    // ['getArticleItem'](state) {
    //     return state.item
    // },
    // ['getTrending'](state) {
    //     return state.trending
    // }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
