import qs from 'qs';
import axios from 'axios';
import { Message } from 'element-ui';
import uitls from './util';

let baseUrl = ''; //设置你的baseUrl

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
//设置token
function setToken() {
  if (utils.local.get('token')) {
    axios.defaults.headers.common['token'] = utils.getLocal('token');
  }
}

//请求验证拦截器
axios.interceptors.request.use(config => {
  store.commit('UPDATE_LOADING', true); //显示loading,这里没有用vuex可以省去
  //判断请求不是登陆接口的时候,字段是不是过期了,(根据业务逻辑做对应的处理)
  if (config.url.indexOf('login') < 0) {
    let lessTime = Number(uitls.local.get('expireTime')) - Date.now(); //后台返回的过期时间与现在的进行计算
    if (lessTime <= 0) {
      Message.error({
        content: '登陆过期',
        duration: 5
      });
      source.token('token过期了');
      store.commit('UPDATE_LOADING', false); //隐藏loading
      window.location.href = '/login';
      utils.local.clear();
    }
  }
  return config;
});
//返回数据拦截器
axios.interceptors.response.use(res => {
  if (res.config.url.indexOf('login') >= 0) {
    const { token, expireTime, code, data } = res.data;
    if (code == '200') {
      //登陆后做出一些本地的处理，按需加载,()
      //...................
      utils.local.set('expireTime', expireTime); //过期时间
      utils.local.set('token', token);
    }
  }
  return res;
});

//封装请求方法
function formatReq(type, url, data) {
  setToken();
  return new Promise((reslove, reject) => {
    axios({
      method: type,
      url: `${baseUrl}${url}`,
      headers: {
        //这里的请求头与后台商量设置
        'content-Type': 'application/x-www-form-urlencoded'
      },
      cancelToken: source.token,
      data: qs.stringify(data) //java后台用qs转
      // data:JSON.stringify(data)//PHP后台用JSON转
    })
      .then(r => {
        store.commit('UPDATE_LOADING', false); //隐藏loading
        //这里可以添加指定对应状态码的处理方式,比如登陆过期,res.data.code === '6666' 路由跳转到login
        reslove(r);
      })
      .catch(e => {
        store.commit('UPDATE_LOADING', false); //隐藏loading
        reject(e.message);
        Message.error(e.message);
      });
  });
}

const Http = {
  get: (url, query) => {
    url = utils.formatUrl(url, query);
    setToken();
    return axios.get(`${baseUrl}${url}`, { cancelToken: source.token }).then(r => r);
  },
  post: (url, data) => formatReq('post', url, data),
  put: (url, data) => formatReq('put', url, data),
  patch: (url, data) => formatReq('patch', url, data),
  delete: (url, data) => formatReq('delete', url, data)
};

export default Http;