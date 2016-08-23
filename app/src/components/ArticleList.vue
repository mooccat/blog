<template>
  	<ul>
  		<li v-for="article in articleList"><a href="#/article/{{article._id}}">{{article.title}}</a></li>
  	</ul>
</template>
<script>
export default{
	data() {
		return {
			articleList:[],
		}
	},
	ready(){
      var resource = this.$resource('article');
      // GET someItem/1
      resource.get().then((response) => {
         var res =  JSON.parse(response.body);
         console.log(res+res.data);
         this.articleList = res.data;
      });		
	}
}
</script>
<style>

</style>