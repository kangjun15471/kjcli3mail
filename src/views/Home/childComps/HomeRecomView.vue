<template>
  <div class="recommend">
    <div class="items" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <div class="img">
          <img :src="item.image" :title="item.title" />
        </div>
        <div class="text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeRecomView',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="less">
.recommend{
  width: 100%;
  display: flex;
  text-align: center;
  padding: 12px 0;
  border-bottom: 10px solid #eee;
  .items{
    flex: 1;
    a{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .img{
        width: 76%;
        overflow: hidden;
        img{
          width: 100%;
          display: block;
        }
      }
      .text{
        padding-top: 6px;
        font-size: 14px;
        color: #666666;
      }
    }
  }
}
</style>