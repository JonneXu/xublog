<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input type="text" name="title" v-model="title"> <br>
      <input type="text" name="content" v-model="content"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '添加文章',
        userName: '',
        age: ''
      }
    },
    methods: {
      addUser () {
        var title = this.title
        var content = this.content
        this.$http.post('/api/articles/input', {
          title: title,
          content: content
        }, {}).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>



<style >
input{
  display:inline-block;
  width:100%;
}
  a{
    display: block;
  }
  .hello{
    background-color: #7e8c8d;
    width:100%;
  }
</style>
