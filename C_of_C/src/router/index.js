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
import NoticeDetail from '@/components/NoticeDetail'
import AdminLogin from '@/admin/AdminLogin'
import AdminUser from '@/admin/AdminUser'
import AdminPay from '@/admin/AdminPay'
import AdminRegis from '@/admin/AdminRegis'

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
      path: '/addrList',
      name: 'AddrList',
      component: AddrList
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/userinfo',
      name: 'Userinfo',
      component: Userinfo
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/noticedetail',
      name: 'NoticeDetail',
      component: NoticeDetail
    },
    {
      path: '/admin_login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/admin/user_management',
      name: 'AdminUser',
      component: AdminUser
    },
    {
      path: '/admin/payment_management',
      name: 'AdminPay',
      component: AdminPay
    },
    {
      path: '/admin/payregis_management',
      name: 'AdminRegis',
      component: AdminRegis
    }
  ]
})
