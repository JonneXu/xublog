<template>
	<div class="article">
		<div class="article-line">
			<ul>
				<li class="article-li" v-for="item in articles">
				<router-link :to="'/artDetail/'+item.id"  :artDetail= "item" class="article-title" >{{item.title}}</router-link>
          <span class="article-time">{{item.Uptime}}</span>
				<span class="article-content">{{item.content}}</span>
				</li>
			</ul>
		</div>
		<div class="article-hot">
			我是热评
		</div>
	</div>
</template>

<script >
import artDetail from '../article-detail/article-detail'
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
  },
  components: {
    artDetail
  }
}
</script>

<style >
.article{
	display: flex;
	width: 100%;
  background-color: #EEEDB0;
}
.article-line{
 order: 0;
 width: 80%;
}
.article-li{
	display: flex;
  flex-direction: column;
	height: 117px;
  border-style:none solid solid solid;
	border-width:1px;
  border-color: #B8B891;
}
.article-title{
  order:1;
  min-height: 36px;
  line-height: 36px;
  font-size:22px;
  white-space:nowrap;
  overflow: hidden;
  padding-left:5px;
}
.article-time{
  font-size: 12px;
  line-height:12px;
  height:12px;
  order:2;
  padding-left:20px;
}
.article-content{
  order:3;
  overflow: hidden;
  line-height:23px;
  padding-left: 5px;
}
.article-hot{
	order: 1;
	width: 20%;
}
</style>
