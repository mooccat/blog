<template>
  	
	<link rel="stylesheet" href="//cdn.jsdelivr.net/editor/0.1.0/editor.css">
    <fieldset>
  		<div class="form-group">
  		  <label for="inputtitle3" class="col-sm-2 control-label">{{postLabel.title}}</label>
  		  <div class="col-sm-10">
  		    <input type="title" class="form-control" id="inputtitle3" placeholder="title" v-model="postTopic.title">
  		  </div>
  		</div>
  		<div class="clearfix"></div>
      	<textarea></textarea>
      	<a class="btn btn-success" @click.prevent.stop="post">提交</a>
    </fieldset>
</template>
<script>
export default{
	data() {
		return {
			postLabel: {
				title: '标题：',
			},
			postTopic: {
				title:'',
			}	
		}
	},
	ready() {
		this.editor = new Editor();
		this.editor.render();
	},
	methods: {
		post() {
			const content = this.editor.codemirror.getValue();
			const title = this.postTopic.title;
			const newArticle = {'title':title,'content':content}
					var resource = this.$resource('article');
			      resource.save({article:newArticle}).then((response) => {
          // success callback
      }, (response) => {
          // error callback
      })
		}


	},
}
</script>
<style>
	label{
		font-size: 20px;
	}
</style>
