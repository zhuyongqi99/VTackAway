<template>
  <div class="app">
    <router-view></router-view>
    <!-- 为了底部导航只在首页、搜索、订单列表、个人中心四个路由显示，在其它不显示，如在登录界面隐藏掉 -->
    <!-- 未优化前 -->
    <!-- <footer-guide v-show="$route.path==='/home'||$route.path==='/search'||$route.path==='/order'||$route.path==='/profile'" /> -->
    <!-- 优化后使用路由的meta属性，添加一个标识 -->
    <footer-guide v-show="$route.meta.isShowFooterGuide" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
