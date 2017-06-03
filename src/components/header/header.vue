<template>
	<div class="header">
	    <div class="header-left">
		<div class="mypic"></div>
		<div class="welcome" >
			欢迎，{{username}}
		</div>
		</div>
    <div class="log" >
      <router-link to="/signUp" class="sign-Up btn" >注册</router-link>
      <a href="javascript:;" class="sign-In btn" @click="changeLog">{{logBtn}}</a>
    </div>
	</div>
</template>

<script >
  import { bus } from '../bus.js'
  var that = this
  export default{
    data() {
        return {
            username: '游客',
            LogUsr: false,
            logBtn: '登录'
        }
    },
    created() {
        alert(this)
         that = this
        bus.$on('id-selected',function (data) {
          that.logU = data[0]
          that.username = data[1]
          if (that.logU == true) {
              that.logBtn = '退出登录'
          }
        })
  },
    methods: {
        changeLog(){
            if (that.username =='游客'){
              this.$router.replace('/signIn')
            }else{
                this.logBtn ='登录'
              this.logUsr = 'false'
              this.username ='游客'
            }
        }
    }
  }
</script>
<style >
.header{
  background-image: url(../../common/src/timg1.jpeg);
  opacity: 0.9;
  display: flex;
  justify-content: space-between;
}
.header-left{
  display: flex;
	 height:90%;
	 padding-left:30px;
}

.mypic {
  margin-top: 10px;
  position: relative;
  width: 106px;
  height: 50px;
}

.mypic:before,
.mypic:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border: 10px solid #B3B3B3;
  -moz-border-radius: 25px 25px 0 25px;
  border-radius: 25px 25px 0 25px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.mypic:after {
  left: auto;
  right: 0;
  -moz-border-radius: 25px 25px 25px 0;
  border-radius: 25px 25px 25px 0;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
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
