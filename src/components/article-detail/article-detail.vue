<template>
  <div class="article-detail">
    <router-link to="/article" class="return-btn">返回</router-link>
    <div class="detail-title">
      {{article.title}}
    </div>
    <div class="detail-content">
      {{article.content}}
    </div>
  </div>
</template>

<script>

  export default{
    data () {
      return {
        article: {}
      }
    },
    created () {
      this.$http.get('/api/artDetail/'+ this.$route.params.id ).then(response => {
        this.article = response.body.data[0]
      }, response => {
      })
    }
  }
</script>

<style>
  .article-detail{
    display: flex;
    flex-direction:column;
    width:100%;
    height:100%;
  }
  .return-btn{
    order: 0;
    padding-right:30px;
    display: block;
    font-size:30px;
    width:80px;
    height:50px;
    line-height:50px;
  }
  .detail-title{
    order:1;
    height:40px;
    font-size:20px;
  }
  .detail-content{
    order:2;
  }
</style>
