<template>
  <div class="about">
    <nav-bar class="about-nav">
      <div slot="nav-center">{{title}}</div>
    </nav-bar>

    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: 'About',
    components:{
      NavBar
    },
    data() {
      return {
        title:'关于我们'
      }
    },
  }
</script>

<style lang="less">
.about-nav{
  background: #42b983;
}
</style>