<template>
  <div>
      <div>layout</div>
      <span><router-link to="/system/person/">点击跳转到父A页面</router-link></span><br/>
      <span><router-link to="/system/person1/">点击跳转到父B页面</router-link></span><br/>
      <span><router-link to="/authority/child">点击跳转到子页面</router-link></span>
      <router-view />
      <div id="authority"></div>
  </div>
</template>

<script>
import { start } from 'qiankun';
export default {
    mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start()
    }
  },
}
</script>

<style lang="scss" scoped>

</style>