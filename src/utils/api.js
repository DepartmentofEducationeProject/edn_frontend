import axios from 'axios'
import {message} from 'element-ui'
import router from '../router'

//相应拦截器
axios.interceptors.response.use(success => {
    if (success.status && success.status == 200) {
        //业务逻辑错误，或者访问禁止
        if (success.data.code == 500 || success.data == 403) {
            message.error({message: success.data.message});
            return;
        }
        //其他的所有种类
        if (success.data.message) {
            message.success({message: success.data.message});
        }
    }
    return success.data;
}, error => {
    if (error.respond.code == 504 || error.respond.code == 404) {
        message.error({message: "服务器被吃了"});
    } else if (error.respond.code == 403) {
        message.error({message: "权限不足，请提示管理员"});
    } else if (error.respond.code == 401) {
        message.error({message: "尚未登录"});
    } else {
        message.error({message: "未知错误"});
    }
    return;
});

let base = '';

//传送json格式的post请求
export const postRequest = (url, params) => {
    return axios({
        method: "post",
        url: '${base}${url}',
        data: params
    })
}