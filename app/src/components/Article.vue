<template>
  	<h1>{{article.title}}</h1>
    <div class="container">{{{article.content}}}</div>
</template>
<script>
export default{
	data() {
		return {
			article:{},
		}
	},
	ready(){
      var resource = this.$resource('article{/id}');
      // GET someItem/1
      resource.get({id:this.$route.params.id}).then((response) => {
         var res =  JSON.parse(response.body);
         console.log(res+res.data);
         this.article = res.data;        
      });		
	}
}
</script>
<style>
.container{
  width: 620px;
}
</style>