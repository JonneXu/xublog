<template>
  <div class="add-article">
    <h1 class="add-head">{{ msg }}</h1>
    <div>
      <input type="text" class="add-title" v-model="title"/>
      <textarea type="text" class="add-content" v-model="content"/>
      <div class="add-confirm">
      <span v-model="addTime"></span>
      <a href="javascript:;" @click="addUser" class="btn">提交</a>
      <router-link to="/article" class="btn">取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  function addzero(indate){
      if(indate<10) return "0" + indate
    else return indate
  }
  export default {
    name: 'hello',
    data () {
      return {
        msg: '添加文章',
        userName: '',
        age: '',
        addTime: ''
      }
    },
    methods: {
      addUser () {
        var title = this.title
        var content = this.content
        var nowTime= new Date()
        this.addTime = nowTime.getFullYear() + '-' + addzero(nowTime.getMonth()+1) + '-' + addzero(nowTime.getDate()) + ' ' +
        addzero(nowTime.getHours()) + ':' + addzero(nowTime.getMinutes())
        if (title==null)  {
            alert('标题不能为空！')
            return
        }
        if (content==null){
            alert('内容不能为空！')
            return
        }
        this.$http.post('/api/articles/input', {
          title: title,
          content: content,
          addTime: this.addTime
        }, {}).then(() => {
          alert('添加成功')
          this.$router.replace('/article')
        })
      }
    }
  }
</script>



<style >
  .add-article{
    margin-top:20px;
    width:100%;
    display: flex;
    flex-direction:column;
    font-size:14px;
  }
  .add-head{
    text-align: center;
  }
  .add-title{
    display: block;
    margin:10px auto;
    width:600px;
  }
  .add-content{
    display: block;
    margin:10px auto;
    width: 600px;
    height:300px;
  }
  .add-confirm{
    text-align: center;
  }
</style>
