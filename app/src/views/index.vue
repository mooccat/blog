<template>
<div class="container" style="margin-top:60px;">
	<div class="row">
		<div class="col-md-8">
			<article-list-view></article-list-view>		
		</div>
		<div class="col-md-4">
			<sort-panel></sort-panel>
			<tag-panel></tag-panel>
		</div>
		<div class="clearfix"></div>
	</div>
</div>

</template>
<style>

</style>
<script>
import articleListView from '../components/ArticleList'
import sortPanel from '../components/sortPanel'
import tagPanel from '../components/TagPanel'
import {getArticleList,getSorts,getTags} from '../vuex/getters'
import {fetchArticleList,fetchSorts,fetchTags} from '../vuex/actions'


export default{
	data() {
		return {

		}
	},
	components:{
		articleListView,
		sortPanel,
		tagPanel
	},
	vuex:{
		actions:{
			fetchArticleList,
			fetchSorts,
  			fetchTags
		},
		getters:{
			articleList:getArticleList,
			sorts:getSorts,
    		tags:getTags
		}
	},
	route: {
     	data() {
        	this.fetchArticleList();
        	this.fetchSorts();
        	this.fetchTags();
    	}
    },
}
</script>
<style>

</style>