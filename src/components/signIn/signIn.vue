<template>
  <div class="signIn">
    <h2 class="InTitle">登录</h2>
    <div class="In-form">
      <div class="input-wrap">
        <input v-model="form.username" type="text" placeholder="昵称" class="base-input">
        <p class="input-tips">长度不超过10位</p>
      </div>
      <div  class="input-wrap">
        <input v-model="form.password" type="text" placeholder="密码" class="base-input">
        <p class="input-tips">长度8-15位</p>
      </div>
      <div class="signIn-confirm">
      <a @click="confirm" href="javascript:;" class="btn" >确认登录</a>
      <router-link to="/mypage" class="btn">取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { bus } from '../bus.js'
  export default{
      data(){
          return {
              form:{
                  username: '',
                  password: ''
              },
              adminName: false
          }
      },
    methods:{
      confirm(){
        this.$http.post('/api/log/logIn',{userData:{
          username: this.form.username
        }}).then(response =>{
          if (response.body[0]== null){
              alert('用户不存在！')
            return
          }else if (response.body[0].password != this.form.password){
              alert('密码错误！')
            return
          }else{
            if(this.form.username == 'xjy'){
                this.adminName =true
            }
              bus.$emit('id-selected',[true, this.form.username, this.adminName])
              this.$router.replace('/mypage')
          }
        },response =>{})
      }
    }
  }
</script>

<style>
.signIn{
  margin:30px auto;
  width:300px;
  border:1px solid #B8B891;
  box-shadow: 5px 5px 3px #888888;
  height: 200px;
}
.InTitle{
  margin-top: 10px;
  text-align: center;
}
.In-form{
  width:80%;
  margin: 10px auto;
}
.base-input{
  width:100%;
  line-height:16px;
  padding:10px auto;
  margin:10px auto;
}
.signIn-confirm{
  margin:20px 40px;
  display: flex;
  justify-content: space-between;
}
.btn{
  padding:3px;
  border:1px solid #B8B891;
  box-shadow: 1px 1px 1px #888888;
}
</style>
