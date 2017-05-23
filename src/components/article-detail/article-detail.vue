<template>
  <div class="article-detail">
    {{$route.params.title}}
  </div>
</template>

<script>
 // var artindex=;
  export default{
    data () {
      return {
        article: []
      }
    },
    created () {
      this.$http.get('/api/articles').then(response => {
        this.articles = response.body.data
      }, response => {
      })
    }
  }
</script>

<style>
</style>
