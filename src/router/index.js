import Vue from 'vue'
import Router from 'vue-router'
import mypage from '../components/mypage/mypage'
import article from '../components/article/article'
import chatting from '../components/chatting/chatting'
import about from '../components/about/about'
import artDetail from '../components/article-detail/article-detail'

Vue.use(Router)
const routes = [
  {path: '/mypage', component: mypage},
  {path: '/article', component: article},
  {path: '/chatting', component: chatting},
  {path: '/about', component: about},
  {path: '/artDetail/:id', name: 'artDetail', component: artDetail}
]
export default routes

