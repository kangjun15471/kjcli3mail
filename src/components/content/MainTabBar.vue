<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor="#2e73ff">
      <img slot="tab-bar-icon" src="~@/assets/img/tabbar/tabbar1.png" alt="">
      <img slot="tab-bar-icon-active" src="~@/assets/img/tabbar/tabbar1_cur.png" alt="">
      <span slot="tab-bar-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path='/category' activeColor="#2e73ff">
      <img slot="tab-bar-icon" src="~@/assets/img/tabbar/tabbar2.png" alt="">
      <img slot="tab-bar-icon-active" src="~@/assets/img/tabbar/tabbar2_cur.png" alt="">
      <span slot="tab-bar-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path='/cart' activeColor="#2e73ff">
      <img slot="tab-bar-icon" src="~@/assets/img/tabbar/tabbar4.png" alt="">
      <img slot="tab-bar-icon-active" src="~@/assets/img/tabbar/tabbar4_cur.png" alt="">
      <span slot="tab-bar-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path='/profile' activeColor="#2e73ff">
      <img slot="tab-bar-icon" src="~@/assets/img/tabbar/tabbar5.png" alt="">
      <img slot="tab-bar-icon-active" src="~@/assets/img/tabbar/tabbar5_cur.png" alt="">
      <span slot="tab-bar-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name:'MainTabBar',
    data() {
      return {
        
      }
    },
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>