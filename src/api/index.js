import axios from 'axios'
import {
    apiBaseUrl
} from '~config'
import api from '~api'
import { inBrowser } from '../utils'
const qs = require('qs');


// const config = {
//     api:'http://10.166.1.200:81/api/v1',
//     timeout:3000
// }
axios.defaults.baseURL = apiBaseUrl;

axios.interceptors.request.use(config => {
    // store.dispatch('global/gProgress', 50)
    // console.log("req:"+config);
    return config
}, error => {
    // console.log("reqErr:"+error);
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    // store.dispatch('global/gProgress', 100)
    // console.log("resp:"+response);
    return response
}, error => {
    // console.log("respErr:"+error);
    // store.dispatch('global/gProgress', 100)
    // store.dispatch('global/showMsg', error.toString())
    return Promise.reject(error)
})

function checkStatus(response) {
    // console.log(response);
    if (response.status === 200 || response.status === 304) {
        return response
    }
    return {
        data: {
            code: -400,
            message: response.statusText
        }
    }
}

function checkCode(res) {
    // console.log(res);
    if (inBrowser && res.data.code === -500) {
        // window.location.href = '/backend'
        return
    } else if (inBrowser && res.data.code === -400) {
        // window.location.href = '/'
        return
    } else if (res.data.code !== 200) {
        // store.dispatch('global/showMsg', res.data.message)
    }
    return res
}
export default {
    post(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            // timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkStatus).then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: url,
            params,
            // timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkStatus).then(checkCode)
    }
}