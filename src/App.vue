<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    App
    <span><router-link to="/">点击跳转到父页面</router-link></span>
    <span><router-link to="/system/person">点击跳转到父layout页面</router-link></span>
    <span><router-link to="/authority/">点击跳转到子页面</router-link></span>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
