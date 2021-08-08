<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <span><router-link to="/">点击跳转到父页面</router-link></span>
    <span><router-link to="/vue">点击跳转到子页面</router-link></span>
    <router-view />
    <div id="vue"></div>
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
