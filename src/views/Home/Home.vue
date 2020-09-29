<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">{{title}}</div>
    </nav-bar>
    <home-banner :banners="banner.list"></home-banner>
    <home-recom-view :recommends="recommend.list"></home-recom-view>

    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <img alt="Vue logo" src="~@/assets/img/logo.png">
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeBanner from './childComps/HomeBanner'
  import HomeRecomView from './childComps/HomeRecomView'
  import {getHomeMultidata} from '@/network/home'

  export default {
    name: 'Home',
    components: {
      NavBar,HomeBanner,HomeRecomView
    },
    data() {
      return {
        title:'首页',
        banner:{},
        keywords:{},
        dkeyword:{},
        recommend:{},
      }
    },
    created() {
      getHomeMultidata().then(result => {
        this.banner = result.data.banner;
        this.keywords = result.data.keywords;
        this.dkeyword = result.data.dKeyword;
        this.recommend = result.data.recommend;
        // console.log(this.data)
      }).catch(err => {
        console.log(err)
      });
    }
  }
</script>

<style lang="less">
  .home-nav{
    background: #42b983;
  }
</style>