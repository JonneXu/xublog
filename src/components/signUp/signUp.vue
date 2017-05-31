<template>
  <div class="signUp">
    <h2 class="UpTitle">注册</h2>
    <div class="Up-form">
      <div class="input-wrap">
        <input v-model="form.username" type="text" placeholder="昵称" class="base-input">
        <p class="">长度不超过10位</p>
      </div>
      <div  class="input-wrap">
        <input v-model="form.password" type="text" style="ime-mode: disabled" placeholder="密码" class="base-input">
        <p class="">长度8-15位</p>
      </div>
      <div class="input-wrap">
        <input v-model="form.RePassword" type="text" style="ime-mode: disabled" placeholder="重复密码" class="base-input">
        <p class="">长度8-15位</p>
      </div>
      <div class="signUp-confirm">
      <a @click="confirm" href="javascript:;" class="btn">确认注册</a>
      <router-link to="/mypage" class="btn" >取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { bus } from '../bus.js'
  export default{
    data() {
        return {
            form: {
                username: '',
                password: '',
                RePassword: ''
            }
        }
    },
    methods: {
        confirm(){
            if (this.form.username =='' || this.form.password ==''  || this.form.RePassword == '' ){
                alert('请完善你的资料')
                return
            }
          if (this.form.username.length>10){
            alert('用户名过长！')
            return
          }
            if(!(this.form.RePassword == this.form.password)){
                alert('两次密码输入不一致')
                return
            }
            if (this.form.password.length<8){
                alert('密码过短！')
                return
            }
          if (this.form.password.length>15){
            alert('密码过长！')
            return
          }
            this.$http.post('/api/log/logUp',{userData:{
                username: this.form.username,
                password: this.form.password
            }}).then(response =>{
                if(response.body.ale){
                    alert('用户名已存在！')
                }
                else {
                  alert('注册成功')
                  bus.$emit('id-selected',[true,this.form.username])
                 this.$router.replace('/mypage')
                }
            },response =>{})
        }
    }
  }
</script>

<style>
  .signUp{
    margin:30px auto;
    width:300px;
    border:1px solid #B8B891;
    box-shadow: 5px 5px 3px #888888;
    height: 250px;
  }
  .UpTitle{
    margin-top: 10px;
    text-align: center;
  }
  .Up-form{
    width:80%;
    margin: 10px auto;
  }
  .base-input{
    width:100%;
    line-height:16px;
    padding:10px auto;
    margin:10px auto;
  }
  .signUp-confirm{
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
