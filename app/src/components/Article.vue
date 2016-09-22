<template>
	<div class="container" style="margin-top:60px;">
		<div class="row">
			<div class="col-md-12">

				<section>
					<div class="abstract col-md-12 col-sm-12">
						<div class="abstract-img">
							<a href="#/article/{{article._id}}">
								<img v-bind:src="article.img"alt=""></a>
						</div>
						<div class="abstract-title">
							<h1>
								<a href="#" v-link="{path:'url'}">{{article.title}}</a>
							</h1>
						</div>
						<div class="divider col-md-12 col-sm-12"></div>
						<div class="abstract-meta">
							<div class="pull-left tag-meta" v-for="tag in article.tags">
								<a href="#/tags/{{tag}}" class="label label-default" v-if="$index%6==0">{{tag | IdToName tags}}</a>
								<a href="#/tags/{{tag}}" class="label label-primary" v-if="$index%6==1">{{tag | IdToName tags}}</a>
								<a href="#/tags/{{tag}}" class="label label-success" v-if="$index%6==2">{{tag | IdToName tags}}</a>
								<a href="#/tags/{{tag}}" class="label label-warning" v-if="$index%6==3">{{tag | IdToName tags}}</a>
								<a href="#/tags/{{tag}}" class="label label-danger" v-if="$index%6==4">{{tag | IdToName tags}}</a>
								<a href="#/tags/{{tag}}" class="label label-info" v-if="$index%6==5">{{tag | IdToName tags}}</a>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="abstract-content">{{{article.content}}}</div>
						<div class="info-content">
							<div class="pull-left info-meta" >
								<span class="posted-on"> <i class="glyphicon glyphicon-calendar"></i>
									<a>
										<time datetime="{{article.creat_at}}">{{article.creat_at | timeToNow}}</time>
									</a>
								</span>
								<span class="posted-on"> <i class="glyphicon glyphicon-user"></i>
									<a>
										<span>{{article.author}}</span>
									</a>
								</span>
								<span class="posted-on">
									<i class="glyphicon glyphicon-comment"></i>
									<a>
										<span>170</span>
									</a>
								</span>
								<span class="posted-on">
									<i class="glyphicon glyphicon-bookmark"></i>
									<a href="#/sort/{{article.sort}}">
										<span>{{article.sort | IdToName sorts}}</span>
									</a>
								</span>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
					<div id="comment-box" ></div>

				</section>

			</div>
		</div>
	</div>
</template>
<script>
import highlightCss from '../js/highlight.js/styles/default.css'
export default{
	  props:['article','sorts','tags'],
	  ready(){
	  	console.log(this.article.data);
	  },
}
</script>
<style>
.container{
	margin: auto;
}
</style>