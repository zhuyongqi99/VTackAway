/*
 路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 配置所有路由
  routes: [
    // 首页模块路由
    {
      path: '/home',
      component: Home,
      meta: {
        isShowFooterGuide: true
      }
    },
    // 搜索模块路由
    {
      path: '/search',
      component: Search,
      meta: {
        isShowFooterGuide: true
      }
    },
    // 订单列表模块路由
    {
      path: '/order',
      component: Order,
      meta: {
        isShowFooterGuide: true
      }
    },
    // 个人中心模块路由
    {
      path: '/profile',
      component: Profile,
      meta: {
        isShowFooterGuide: true
      }
    },
    // 默认路由
    {
      path: '/',
      redirect: '/home'
    },
    // 登录模块路由
    {
      path: '/login',
      component: Login
    }
  ]
})
