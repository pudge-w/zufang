/* eslint-disable */
import axios from 'axios';
import { Toast } from 'antd-mobile';

let instance = axios.create({
  baseURL: 'http://10.31.162.37:2000/api',
  timeout: 10000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.status === 0) {
    return response.data
  } else {
    Toast.info(response.data.msg)
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const http = {
  get(url, params) {
    return instance.get(url, {
      params: params
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error);
    });
  },
  post() {}
}

export default http;