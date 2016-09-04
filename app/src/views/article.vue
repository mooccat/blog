<template>

	<article-page></article-page>
</template>
<script>
import articlePage from '../components/Article'
import {fetchArticle} from '../vuex/actions'
import {getArticle} from '../vuex/getters'
import highlightCss from '../js/highlight.js/styles/default.css'

export default{
	components:{
		articlePage,
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

</style>