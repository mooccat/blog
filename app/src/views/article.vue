<template>

	<article-page :article="article" :sorts="sorts" :tags="tags"></article-page>
	
</template>
<script>
import articlePage from '../components/Article'
import {fetchArticle,fetchSorts,fetchTags} from '../vuex/actions'
import {getArticle,getSorts,getTags} from '../vuex/getters'
import highlightCss from '../js/highlight.js/styles/default.css'

export default{
	components:{
		articlePage,
	},
	vuex:{
		actions:{
			fetchArticle,
			fetchSorts,
			fetchTags
		},
		getters:{
			article:getArticle,
			tags:getTags,
			sorts:getSorts,
		}
	},
	ready(){
		const id = this.$route.params.id;
		function toggleDuoshuoComments(container,id){
		    var el = document.createElement('div');//该div不需要设置class="ds-thread"
		    var url= 'http://fishliu.com/article'+id;
		    console.log(url);
		    el.setAttribute('data-thread-key',id);//必选参数
		    el.setAttribute('data-url', url);//必选参数
		    DUOSHUO.EmbedThread(el);
		    jQuery(container).append(el);
		};
		toggleDuoshuoComments('#comment-box',id);
	},
	route: {
      data({ to: { params: { id } } }) {
        this.fetchArticle(id);
        this.fetchSorts();
      	this.fetchTags();
      },
    },
}
</script>
<style>

</style>