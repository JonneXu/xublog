<template>
  <div class="article-detail">
    <div class="detail-main">
      <div class="return-btn">
      <i class="arrLeft"></i>
      <router-link to="/article" class="returnText">返回</router-link>
      </div>
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
    border:2px solid #B8B891;
    border-radius: 12px;
    margin:10px auto;
  }
  .return-btn{
       margin: 20px 10px;
       order: 0;
       height: 22px;
       width:48px;
    font-size: 0;
    display: flex;
     }
  .arrLeft{
    height: 0;
    width: 0;
    index: 0;
    border-right:11px solid #B8B891;
    border-top: 11px solid  transparent;
    border-bottom:11px solid transparent;
  }

  .returnText{
    display: block;
    font-size: 14px;
    line-height:18px;
    border: 1px solid #B8B891;
    border-radius: 2px;
    box-shadow: 1px 1px 1px #888888;
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
