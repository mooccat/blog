<template>

	<section v-for="abstract in articleList">
		<div class="abstract col-md-12 col-sm-12">
			<div class="abstract-img">
				<a href="#/article/{{abstract._id}}">
					<img v-bind:src="abstract.img"alt=""></a>
			</div>
			<div class="abstract-title">
				<h1>
					<a href="#/article/{{abstract._id}}">{{abstract.title}}</a>
				</h1>
			</div>
			<div class="divider col-md-12 col-sm-12"></div>
			<div class="abstract-meta">
				<div class="pull-left tag-meta" v-for="tag in abstract.tags">
					<a href="#/tags/{{tag}}" class="label label-default" v-if="$index%6==0">{{tag | IdToName tags}}</a>
					<a href="#/tags/{{tag}}" class="label label-primary" v-if="$index%6==1">{{tag | IdToName tags}}</a>
					<a href="#/tags/{{tag}}" class="label label-success" v-if="$index%6==2">{{tag | IdToName tags}}</a>
					<a href="#/tags/{{tag}}" class="label label-warning" v-if="$index%6==3">{{tag | IdToName tags}}</a>
					<a href="#/tags/{{tag}}" class="label label-danger" v-if="$index%6==4">{{tag | IdToName tags}}</a>
					<a href="#/tags/{{tag}}" class="label label-info" v-if="$index%6==5">{{tag | IdToName tags}}</a>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="abstract-content">{{{abstract.content}}}</div>
			<div class="info-content">
				<div class="pull-left info-meta" >
					<span class="posted-on"> <i class="glyphicon glyphicon-calendar"></i>
						<a>
							<time datetime="{{abstract.creat_at}}">{{abstract.creat_at | timeToNow}}</time>
						</a>
					</span>
					<span class="posted-on"> <i class="glyphicon glyphicon-user"></i>
						<a>
							<span>{{abstract.author}}</span>
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
						<a href="#/sort/{{abstract.sort}}">
							<span>{{abstract.sort | IdToName sorts}}</span>
						</a>
					</span>
				</div>
				<a class="btn btn-primary pull-right remore" href="#/article/{{abstract._id}}">Read More</a>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="clearfix"></div>
	</section>

</template>
<style>
	.abstract{
		background-color: #fff;
		border-radius: 5px;
		box-shadow:0 0 10px rgba(22, 160, 133,1.0); 
		margin-bottom: 20px;
	}
	.abstract-img{
		width: 100%;
		height: 0px;
		padding-bottom: 30%;
  		overflow: hidden;
	}
	.abstract-img img{
		width: 100%;
		margin:10px 0px;
	}
	.abstract-title{
		margin-bottom: 10px;
		border-bottom: 1px solid #e7e7e7;
		position: relative;
	}
	.abstract-title h1:after {
	    content: "";
	    background-color: #19B5FE;
	    left: 0;
	    width: 40px;
	    height: 3px;
	    bottom: -2px;
	    position: absolute;
	}
	.abstract-meta{
		margin-bottom: 35px;
	}
	.tag-meta{
		margin-bottom: 20px;
		margin-right: 5px;
	}
	.info-content{
		height: 70px;
	}
	.info-meta{
		margin: 20px 0px;
		height: 40px;
		line-height: 40px;
	}
	.posted-on{
		margin-right: 20px;
	}
	.remore{
		margin: 20px 0px;
	}
	a:hover{
		text-decoration: none;
	}

</style>
<script>
import {getArticleList,getSorts,getTags} from '../vuex/getters'
import {fetchArticleList,fetchSorts,fetchTags} from '../vuex/actions'


export default{
	props:['articleList','sorts','tags'],
}
</script>
<style>

</style>