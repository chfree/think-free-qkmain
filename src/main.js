import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from "./router"

import { registerMicroApps, start } from "qiankun"

Vue.config.productionTip = false

Vue.use(Router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 在主应用中注册子应用
registerMicroApps([
  {
      name: "vue app",
      entry: "//localhost:8083",	// 重点8：对应重点6
      container: '#authority',			// 重点9：对应重点2
      activeRule: '/#/authority'			// 重点10：对应重点4
  }]
);
// 启动
start();