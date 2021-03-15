<template>
  <footer class="footer_guide border-1px">
    <!-- 使用 :class:绑定on，判断路由来改变图标样式 -->
    <span class="guide_item" :class="{on: '/home' === $route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <!-- 未优化：先使用的a标签更改路由切换点击状态 -->
    <!-- <a href="#/home" class="guide_item" :class="{on: '/home' === $route.path}">
      <span class="item_icon">
        <i class="iconfont icon-icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a> -->
    <span class="guide_item" :class="{on: '/search' === $route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide_item" :class="{on: '/order' === $route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-ziyuan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide_item" :class="{on: '/profile' === $route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin1"></i>
      </span>
      <span>我的</span>
    </span>
  </footer>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheel/stylus">
  @import '../../common/stylus/mixins.styl'
  // footer部分样式
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
