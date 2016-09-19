<template>

	<post-page v-on:modify-article="post" :post-topic="postTopic" :post-title="postTitle" :post-author="postAuthor" :post-img="postImg" :sort-selected="sortSelected" :tag-selected="tagSelected" :sorts='sorts' :tags="tags"></article-page>
	
</template>
<script>
import SimpleMDECss from '../js/md/simplemde.min.css';
import SimpleMDE from '../js/md/simplemde.min';
import postPage from '../components/Post'
import {fetchArticle,fetchSorts,fetchTags,modifyArticle} from '../vuex/actions'
import {getArticle,getPostTitle,getPostAuthor,getPostImg,getSortSelected,getTagSelected,getSorts,getTags} from '../vuex/getters'


export default{
	components:{
		postPage,
	},
	data(){
		return {
			postTopic:{
				postTopicTitle:"",
				postTopicAuthor:"",
				postTopicImg:"",
				sortChecked:[],
				tagChecked:[],
			}

		}
	}, 
	ready() {
		this.simplemde = new SimpleMDE();
	},
	vuex:{
		actions:{
			fetchArticle,
			fetchSorts,
			fetchTags,
			modifyArticle
		},
		getters:{
			article:getArticle,
			postTitle:getPostTitle,
			postAuthor:getPostAuthor,
			postImg:getPostImg,
			sortSelected:getSortSelected,
			tagSelected:getTagSelected,
			sorts:getSorts,
    		tags:getTags
		}
	},
	methods: {
		post() {
			const title = this.postTopic.postTopicTitle;
			const author = this.postTopic.postTopicAuthor;
			const img = this.postTopic.postTopicImg;
			const content = this.simplemde.value();
			const tags = this.postTopic.tagChecked;
			const sort = this.postTopic.sortChecked;
			this.modifyArticle({title,author,img,content,tags,sort},this.$route.params.id)
			.then((id)=>{
				this.$route.router.go({ name: 'article', params: { id: id }})
			});

		}
	},
	route: {
   		data({ to: { params: { id } } }) {
   			this.fetchArticle(id)
   				.then((article)=>{
   					this.postTopic.postTopicTitle = article.title;
   					this.postTopic.postTopicAuthor = article.author;
   					this.postTopic.postTopicImg = article.img;
   					this.postTopic.sortChecked = article.sort;
   					this.postTopic.tagChecked = article.tags.slice(0);
   					this.simplemde.value(article.md);
   					console.log(article);
   				});
     		this.fetchSorts();
     		this.fetchTags();
    	}
    },
}
</script>
<style>

</style>