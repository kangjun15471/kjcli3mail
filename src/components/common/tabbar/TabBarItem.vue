<template>
  <div class="tab-bar-item" @click="itemClick" :class="{active: isActive}">
    <div v-if="!isActive"><slot name='tab-bar-icon'></slot></div>
    <div v-else><slot name='tab-bar-icon-active'></slot></div>
    <div :style="activeStyle"><slot name='tab-bar-text'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {}
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    vertical-align: middle;
  }
  .tab-bar-item span{
    font-size: 14px;
  }
</style>