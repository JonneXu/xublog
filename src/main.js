// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router/index'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
const router = new VueRouter({
  mode: 'history',
  routes: Router
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)     // 挂载  这一步很重要
}).$mount('#app')
