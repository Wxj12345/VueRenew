import Vue from 'vue'
import Router from 'vue-router'
const login = () => import(/* webpackChunkName: "group-login" */ '../view/Login.vue')
//主界面相关
const main = () => import(/* webpackChunkName: "group-main" */ '../view/Main.vue')
const Overview = () => import(/* webpackChunkName: "group-main" */ '../view/Overview.vue')
const CustomerProcess = () => import(/* webpackChunkName: "group-main" */ '../view/CustomerProcess.vue')
const FinancialConfirm = () => import(/* webpackChunkName: "group-main" */ '../view/FinancialConfirm.vue')

const Setting = () => import(/* webpackChunkName: "group-main" */ '../view/Setting.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      component: main,
      children: [
        // 当 /main 匹配成功，
        // DashBoard 会被渲染在 main 的 <router-view> 中
        {
          path: '/main/Overview',
          name: '概览',
          component: Overview
        },
        // ...其他子路由
        {
          path: '/main/CustomerProcess',
          name: '客户处理',
          component: CustomerProcess
        },
        {
          path: '/main/FinancialConfirm',
          name: '款项确认',
          component: FinancialConfirm
        },
        {
          path: '/main/Setting',
          name: '续费',
          component: Setting
        },
      ]
    },
  ]
})
