<template>
	<div class="article">
		<div class="article-line">
			<ul>
				<li class="article-li" v-for="item in articles">
				<router-link :to="'/artDetail/'+item.id" class="article-title" >{{item.title}}</router-link>
          <span class="article-time">
            {{item.time}}
            <a  v-show="isShow"   class="article-delete btn" href="javascript:;" @click="deleteArt(item.id)" >删除{{username}}</a>
          </span>
				<span class="article-content">{{item.content}}</span>
				</li>
			</ul>
		</div>
		<div class="article-addition">
      <router-link to="/addArticle" class="article-add">
        添加文章
      </router-link>
		</div>
	</div>
</template>

<script >
  import { bus } from '../bus.js'
  var that = this
export default{
  data () {
    return {
      articles: [],
      username: '',
      isShow: false
    }
  },
  created () {
      that = this
    this.$http.get('/api/articles/show').then(response => {
      this.articles = response.body.data
    }, response => {
    })
    bus.$on('id-selected',function (data) {
      this.username = data[1]
      this.isShow = data[2]
    }.bind(that))
  },
  methods: {
      deleteArt(delId){
        if (confirm('确定删除吗?')){
          this.$http.post('/api/artDel/' + delId).then(response => {
          }, response => {
          })
          this.$http.get('/api/articles/show').then(response => {
            this.articles = response.body.data
          }, response => {
          })
          alert('删除成功！')
        }
      }
  }
}
</script>

<style >
.article{
  margin-left:20px;
	display: flex;
	width: 100%;
}
.article-line{
 order: 0;
 width: 80%;
}
.article-li{
	display: flex;
  flex-direction: column;
  background-color: #F7F7F7;
	height: 180px;
  margin:15px 10px;
  padding: 10px;
  border: 1px solid #B8B891;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 3px #888888;
}
.article-title{
  order:1;
  min-height: 36px;
  line-height: 36px;
  font-size:22px;
  white-space:nowrap;
  overflow: hidden;
  padding-left:15px;
  font-family:STHeiti;
}
.article-time{
  font-size: 12px;
  line-height:12px;
  height:12px;
  order:2;
  padding:0 0 0 30px;
}
.article-content{
  order:3;
  overflow: hidden;
  line-height:23px;
  padding: 0 15px 5px 15px ;
}
.article-delete{
  margin-left:30px;
}
.article-addition{
	order: 1;
  display: flex;
  flex-direction:column;
	width: 20%;
  height:100%;
  margin:5px;
  border:1px solid #B8B891;
  border-radius: 5px;
}
.article-add{
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-bottom: 1px solid  #B8B891;
}
</style>
