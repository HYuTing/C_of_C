// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'

import 'lib-flexible'
import toastRegistry from './toast/toast'
import '../config/axios'

import $ from 'jquery'

Vue.prototype.$ajax = axios

Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.use(toastRegistry)

Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.prototype.baseUrl = '/api';
// Vue.prototype.baseUrl = 'http://chamber.huanglexing.com';
// Vue.prototype.baseUrl = 'https://chamber.w2fzu.com';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
　// 在发送请求之前做些什么
  let token = router.app.$cookies.get('token');
  if(token === null) {
    if(router.app.$cookies.get('token2')) {
      // console.log('token2存在');
      $.ajax({
        url: router.app.baseUrl + '/user/tokenCheck',
        type: "get",
        headers: {
          'S-TOKEN': router.app.$cookies.get('token2')
        },
        async: false,
        dataType: "json",
        success: function(res) {
          router.app.$cookies.set('token', router.app.$cookies.get('token2'), 3600*24*7);
          router.app.$cookies.set('token2', router.app.$cookies.get('token2'), 3600*24*8);
          router.app.$cookies.set('signCheck', router.app.$cookies.get('signCheck'), 3600*24*7);
          router.app.$cookies.set('infoCheck', router.app.$cookies.get('infoCheck'), 3600*24*7);
          console.log("test->>" +router.app.$cookies.get('token'));
          config.headers.common['S-TOKEN'] = router.app.$cookies.get('token');
        },
        error: function(err) {
          router.app.$toast('登录过期，请重新登录');
          router.app.$cookies.remove('token');
          router.app.$cookies.remove('token2');
          router.app.$cookies.remove('signCheck');
          router.app.$cookies.remove('infoCheck');
          setTimeout(() => {
            router.app.$router.push("/login");
          }, 2200);
        }
      })
    }
  }
  else {
    config.headers.common['S-TOKEN'] = token;
  }

　return config
}, function (error) {
　// 对请求错误做些什么
  return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
　// 对响应数据做点什么
  // console.log(response.status);

　return response
}, function (error) {
　// 对响应错误做点什么
  if(error && error.response.status) {
    switch(error.response.status) {
      case 401:
        router.app.$toast('登录过期，请重新登录');
        router.app.$cookies.remove('token');
        router.app.$cookies.remove('token2');
        router.app.$cookies.remove('signCheck');
        router.app.$cookies.remove('infoCheck');
        setTimeout(() => {
          router.app.$router.push("/login");
        }, 2200);
        break;
      case 430:
        router.app.$toast('该用户名已被注册');
        break;
      case 431:
        router.app.$toast('密码错误');
        break;
      case 432:
        router.app.$toast('用户不存在');
        break;
      case 330:
        router.app.$toast('暂无签到活动');
        break;
      case 331:
        router.app.$toast('不在签到时间范围内');
        break;
      default:
        router.app.$toast('获取信息失败');
    }
  }
　return Promise.reject(error)
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


function getToken() {

}

Vue.prototype.$getToken = getToken;
