import axios from 'axios';
import store from "@/store";
import {Message, MessageBox} from "element-ui";
import {getToken} from "@/utils/cookieUtil";


const httpClientUtils = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 15000,
});

/**
 * request拦截器配置
 */
httpClientUtils.interceptors.request.use(config => {
    if (getToken()) {
        config.headers['Authorization'] = getToken();
    }
    return config;
}, error => {
    console.log(error);
    Promise.reject(error).then(r => console.log(r));
});

/**
 * response拦截器
 */
httpClientUtils.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code!=='200') {
            Message({
                message: res.message,
                type: 'error',
                duration: 3*1000
            });
            if (res.code === '401') {
                MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload();
                    });
                })
            }
            return Promise.reject('error');
        } else {
            return response.data;
        }
    }, error => {
        console.log('err' + error);
        Message({
            message: error.message,
            type: 'error',
            duration: 3*1000
        });
        return Promise.reject(error);
    });

export default httpClientUtils;
