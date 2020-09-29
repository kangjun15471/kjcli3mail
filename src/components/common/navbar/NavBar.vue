<template>
  <div class="navbar">
    <div class="nav-left">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
  }
</script>

<style lang='less'>
.navbar{
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #a0f1cd;
  box-shadow: 0 1px 8px rgba(0,0,0,0.1);
  .nav-left,.nav-right{
    width: 60px;
  }
  .nav-center{
    flex: 1;
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;
  }
}
</style>