<template>
	<div class="container" style="margin-top:90px;">
		<form class="form-horizontal">
			<div class="form-group">
				<label for="input{{postTitle.id}}" class="col-sm-2 col-md-2 control-label">{{postTitle.label}}:</label>
				<div class="col-sm-10 col-md-10">
					<input type="{{postTitle.type}}" class="form-control" id="input{{postTitle.id}}" placeholder="{{postTitle.label}}" v-bind:value="postTitle.value" v-model="postTopic.postTopicTitle"></div>
			</div>
			<div class="form-group">
				<label for="input{{postAuthor.id}}" class="col-sm-2 col-md-2 control-label">{{postAuthor.label}}:</label>
				<div class="col-sm-10 col-md-10">
					<input type="{{postAuthor.type}}" class="form-control" id="input{{postAuthor.id}}" placeholder="{{postAuthor.label}}" v-bind:value="postAuthor.value" v-model="postTopic.postTopicAuthor"></div>
			</div>
			<div class="form-group">
				<label for="input{{postImg.id}}" class="col-sm-2 col-md-2 control-label">{{postImg.label}}:</label>
				<div class="col-sm-10 col-md-10">
					<input type="{{postImg.type}}" class="form-control" id="input{{postImg.id}}" placeholder="{{postImg.label}}" v-bind:value="postImg.value" v-model="postTopic.postTopicImg"></div>
			</div>
			<div class="form-group">
				<label for="{{sortSelected.id}}" class="col-sm-2 col-md-2 control-label">{{sortSelected.label}}</label>
				<div class="col-sm-10 col-md-10">
					<label class="radio-inline" v-for="sort in sorts">
					  <input type="radio" name="inlineRadioOptions"  v-bind:value="sort._id" v-model="postTopic.sortChecked"> {{sort.name}}
					</label>
				</div>
			</div>
			<div class="form-group">
				<label for="{{tagSelected.id}}" class="col-sm-2 col-md-2 control-label">{{tagSelected.label}}</label>
				<div class="col-sm-10 col-md-10">
					<label class="checkbox-inline" v-for="tag in tags">
					  <input type="checkbox" v-model="postTopic.tagChecked" v-bind:value="tag._id"> {{tag.name}}
					</label>
				</div>
			</div>
			<textarea class="editor"></textarea>
			<button class="btn btn-success pull-right" @click.prevent.stop="post">提交</button>
		</form>
	</div>
</template>
<script>
import {fetchSorts,fetchTags,addArticle} from '../vuex/actions'
import {getPostTitle,getPostAuthor,getPostImg,getSortSelected,getTagSelected,getSorts,getTags} from '../vuex/getters'


export default{
	props:['postTitle','postAuthor','postImg','sortSelected','tagSelected','sorts','tags','postTopic'],
	methods: {
		post() {
			this.$dispatch('post-article');
			this.$dispatch('modify-article');

			// const title = this.postTopic.postTopicTitle;
			// const author = this.postTopic.postTopicAuthor;
			// const img = this.postTopic.postTopicImg + '-title';
			// const content = this.simplemde.value();
			// const tags = this.postTopic.tagChecked;
			// const sort = this.postTopic.sortChecked;
			// this.addArticle({title,author,img,content,tags,sort})
			// .then((id)=>{
			// 	this.$route.router.go({ name: 'article', params: { id: id }})
			// });

		}
	},
}
</script>
<style>
    .CodeMirror .CodeMirror-scroll {
    min-height: 500px;
  }
	.control-label{
		font-size: 20px;
		text-align: left!important;
		padding-top: 0px!important;
		line-height: 39px;
	}
</style>
