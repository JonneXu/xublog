<template>
  <div id="app">
    <v-header class='v-header'></v-header>
    <div class="content">
        <div class="tab">
        <div class="tab-item">
    	  <router-link to='/mypage' actived>主页</router-link>
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

export default {
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<style>
#app{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
.v-header{
    height: 100px;
    width: 100%;
}
.content{
    width: 100%;
    min-height:668px;
    flex:1;
    display: flex;
}
.tab{
    order: -1;
  min-height:100%;
    width: 130px;
    background-color: #EEEDB0;
    flex-shrink: 0;
}
.tab-item{
    line-height: 60px;
    text-align: center;
    border-bottom:1px solid #B8B891;
}
.tab-item a{
    display: block;
}
.v-footer{
  height:15px;
  flex:1;
}
</style>

