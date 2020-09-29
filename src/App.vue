<template>
  <div id="app">
    <router-view/>
    <main-tab-bar />
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/MainTabBar'

  export default {
    name:'App',
    components: {
      MainTabBar
    }
  }
</script>

<style lang="less">
@import 'assets/css/base.css' ;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active,&:hover {
      color: #42b983;
    }
  }
}
</style>
