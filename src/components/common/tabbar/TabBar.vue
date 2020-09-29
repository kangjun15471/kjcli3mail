<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'TabBar',
}
</script>

<style>
  #tab-bar{
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f6f6f6;
    box-shadow: 0 -1px 8px rgba(0,0,0,0.1);
  }
</style>