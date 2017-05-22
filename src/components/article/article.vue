<template>
	<div class="article">
		<div class="article-line">
			<ul>
				<li class="article-li" v-for="item in articles">
				<span>{{item.title}}</span>
				<span>{{item.content}}</span>
				</li>
			</ul>
		</div>
		<div class="article-hot">
			我是热评
		</div>
	</div>
</template>

<script >
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

<style >
.article{
	display: flex;
	width: 100%;
}
.article-line{
 order: 0;
 width: 80%;
}
.article-li{
	display: block;
	height: 130px;
	border: 3px solid #9BD7C1;
}
.article-hot{
	order: 1;
	width: 20%;
}
</style>
