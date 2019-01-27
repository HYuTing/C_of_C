// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'

import 'lib-flexible'
import toastRegistry from './toast/toast'

Vue.use(VueCookies)
Vue.use(toastRegistry)

Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.prototype.baseUrl = 'http://chamber.huanglexing.com';
// Vue.prototype.userToken = '';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

function tokenExpire() {
  if(router.app.$cookies.get('token') === null) {
    router.app.$toast('登录过期，请重新登录');
    setTimeout(() => {
      router.app.$router.push("/login");
    }, 2200);
    return false;
  }
  else {
    return true;
  }
  // console.log(router.app.$cookies.get('token'));
  // console.log(router.app);
}

// tokenExpire();
Vue.prototype.$getToken = tokenExpire;
