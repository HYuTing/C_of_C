import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Loginup from '@/components/Loginup'
import AddrList from '@/components/AddrList'
import Register from '@/components/Register'
import Userinfo from '@/components/Userinfo'
import Notice from '@/components/Notice'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/loginup',
      name: 'Loginup',
      component: Loginup
    },
    {
      path: '/AddrList',
      name: 'AddrList',
      component: AddrList
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Userinfo',
      name: 'Userinfo',
      component: Userinfo
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
