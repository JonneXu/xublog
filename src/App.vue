<template>
  <div id="app">
    <v-header class='v-header'></v-header>
    <div class="content">
        <div class="tab">
        <div class="tab-item">
    	  <router-link to='/mypage' >主页</router-link>
        </div>
        <div class="tab-item">
        	<router-link to='/article'>文章</router-link>
        </div>
        <div class="tab-item">
        	<router-link  to='/chatting'>交流区</router-link>
        </div>
        <div class="tab-item">
        	<router-link to='/about'>关于</router-link>
        </div>
        </div>
        <router-view></router-view>
    </div>
    <v-footer class="v-footer"></v-footer>
  </div>
</template>

<script>
import header from './components/header/header'
import footer from './components/footer/footer'
import signIn from './components/signIn/signIn'
import signUp from './components/signUp/signUp'
import article from './components/article/article'
import chatting from './components/chatting/chatting'

export default {
  components: {
    'v-header': header,
    'v-footer': footer,
    signIn,
    signUp,
    article,
    chatting
  }
}
</script>

<style>
  @import './common/css/reset.css';
#app{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family:"Times New Roman",Georgia,Serif;
}
.v-header{
    height: 70px;
    width: 100%;
}
.content{
    width: 100%;
    min-height:600px;
    display: flex;
  background-image: url(common/src/back.jpeg);
  opacity: 0.9;
}
.tab{
  min-height:100%;
    width: 130px;
    flex-shrink: 0;
}
.tab-item{
    line-height: 60px;
    text-align: center;
    display: block;
    font-size: 20px;
    border-style: solid solid solid none;
    border-width: 1px;
    border-color: #B8B891;
    margin: 2px 2px 2px 0;
    border-radius: 0 3px 3px 0;
}
.tab-item:hover{
  background-color: #E6E6E6;
}
.router-link-active {
  color: #919191;
  text-decoration: underline;
}
.v-footer{
  height:15px;
  flex:1;
}
</style>

