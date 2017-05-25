<template>
  <div class="article-detail">
    {{$route.params.id}}
  </div>
</template>

<script>
  export default{
    data () {
      return {
        articles: []
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
