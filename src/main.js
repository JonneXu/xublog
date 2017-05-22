// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import mypage from './components/mypage/mypage'
import article from './components/article/article'
import chatting from './components/chatting/chatting'
import about from './components/about/about'

Vue.use(Router)
Vue.use(VueResource)
const routes = [
{path: '/mypage', component: mypage},
{path: '/article', component: article},
{path: '/chatting', component: chatting},
{path: '/about', component: about}
]
const router = new Router({
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)     // 挂载  这一步很重要
}).$mount('#app')
