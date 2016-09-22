<template>
<div class="container" style="margin-top:60px;">
	<div class="row">
		<div class="col-md-8">
			<article-list-view :article-list="articleList" :sorts="sorts" :tags="tags"></article-list-view>		
		</div>
		<div class="col-md-4">
			<sort-panel :sorts="sorts"></sort-panel>
			<tag-panel :tags="tags"></tag-panel>
		</div>
		<div class="clearfix"></div>
	</div>
</div>

</template>
<script>
import articleListView from '../components/ArticleList'
import sortPanel from '../components/SortPanel'
import tagPanel from '../components/TagPanel'
import {getArticleList,getSorts,getTags} from '../vuex/getters'
import {fetchTagList,fetchSorts,fetchTags} from '../vuex/actions'


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
			fetchTagList,
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
     	data({ to: { params: { id } } }) {
        	this.fetchTagList(id);
        	this.fetchSorts();
        	this.fetchTags();
    	}
    },
}
</script>
<style>

</style>