<template>
<div class="container" style="margin-top:60px;">
	<div class="row">
		<div class="col-md-8">
			<h1>{{article.title}}</h1>
			<div>{{{article.content}}}</div>
		</div>
	</div>
</div>
</template>
<script>
import {fetchArticle} from '../vuex/actions'
import {getArticle} from '../vuex/getters'
import highlightCss from '../js/highlight.js/styles/default.css'
export default{
	data() {
		return {
			
		}
	},
	vuex:{
		actions:{
			fetchArticle
		},
		getters:{
			article:getArticle,
		}
	},
	ready(){
		
	},
	route: {
      data({ to: { params: { id } } }) {
        this.fetchArticle(id);
      },
    },
}
</script>
<style>
.container{
	margin: auto;
}
</style>