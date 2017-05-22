<template>
  <div id="app">
    <v-header class='v-header'></v-header>
    <div class="content">
        <div class="tab">
        <div class="tab-item">
    	  <router-link to='/mypage'>主页</router-link>
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
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  components: {
    'v-header': header
  }
}
</script>

<style>
#app{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    height: 100%;
    position: relative;
}
.v-header{
    position: absolute;
    height: 100px;
    width: 100%
}
.content{
    position: absolute;
    margin-top: 100px;
    height: 90%;
    width: 100%;
    display: flex; 
}
.tab{
    order: -1;
    height: 100%;
    width: 130px;
    background-color: #EEEDB0;
}
.tab-item{
    line-height: 60px;
    text-align: center; 
    border-bottom:1px solid #B8B891;
}
.tab-item a{
    display: block;
}
</style>

