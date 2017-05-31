<template>
  <div class="article-detail">
    <div class="detail-main">
      <router-link to="/article" class="return-btn btn">返回</router-link>
    <div class="detail-title">
      {{article.title}}
    </div>
    <div class="detail-time">
      {{article.time}}
    </div>
    <div class="detail-content">
      {{article.content}}
    </div>
    </div>
    <div class="detail-commit">
      pinglunqu
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
  .detail-main{
    width:80%;
    border:1px solid #B8B891;
    margin:10px auto;
  }
  .return-btn{
    order: 0;
    display: block;
    font-size:20px;
    width:40px;
  }
  .detail-title{
    order:1;
    height:40px;
    line-height:40px;
    font-size:20px;
    text-align: center;
  }
  .detail-time{
    order:2;
    text-align: center;
    padding-left:60px;
  }
  .detail-content{
    order:3;
    font-size:14px;
    line-height:18px;
    padding:20px;
  }
</style>
