<template>
	<div class="header">
	    <div class="header-left">
		<img class="mypic"  src="../../common/src/girl.jpg" border="1" />
		<div class="welcome" >
			欢迎，{{username}}
		</div>
		</div>
    <div class="log" >
      <router-link to="/signUp" class="sign-Up btn" >注册</router-link>
      <router-link to="/signIn" class="sign-In btn"  >登录</router-link>
    </div>
	</div>
</template>

<script >
  import { bus } from '../bus.js'
  export default{
    data() {
        return {
            username: '游客',
            Logu: false
        }
    },
    created() {
        var that = this
        bus.$on('id-selected',function (data) {
          that.logu = data[0]
          that.username = data[1]
        })
  }
  }
</script>
<style >
.header{
	background-color:#B3B3B3;
  display: flex;
  justify-content: space-between;
}
.header-left{
  display: flex;
	 height:90%;
	 padding-left:30px;
}
.mypic{
	height: 100%;
  border-radius: 45px;
}
.welcome{
	height: 20px;
	line-height:20px;
  margin:20px 0 0 30px;
	font-weight: 300;
  font-size:20px;
}
.log{
  font-size:14px;
  height:20px;
  line-height:20px;
  margin:auto 30px ;
}
.sign-Up{
  margin:0 10px;
}
.sign-In{
  margin:0 10px;
}
</style>
