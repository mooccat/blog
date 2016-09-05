<template>
	<div class="container" style="margin-top:60px;">
		<div class="row">
			<div class="col-md-12">

				<section>
					<div class="abstract col-md-12 col-sm-12">
						<div class="abstract-img">
							<a href="">
								<img v-bind:src="article.img+'-title'"alt=""></a>
						</div>
						<div class="abstract-title">
							<h1>
								<a href="#" v-link="{path:'url'}">{{article.title}}</a>
							</h1>
						</div>
						<div class="divider col-md-12 col-sm-12"></div>
						<div class="abstract-meta">
							<div class="pull-left tag-meta" v-for="tag in article.tags">
								<span class="label label-default" v-if="$index%6==0">{{tag | IdToName tags}}</span>
								<span class="label label-primary" v-if="$index%6==1">{{tag | IdToName tags}}</span>
								<span class="label label-success" v-if="$index%6==2">{{tag | IdToName tags}}</span>
								<span class="label label-warning" v-if="$index%6==3">{{tag | IdToName tags}}</span>
								<span class="label label-danger" v-if="$index%6==4">{{tag | IdToName tags}}</span>
								<span class="label label-info" v-if="$index%6==5">{{tag | IdToName tags}}</span>
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
									<a>
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
import {fetchArticle,fetchSorts,fetchTags} from '../vuex/actions'
import {getArticle,getSorts,getTags} from '../vuex/getters'
import highlightCss from '../js/highlight.js/styles/default.css'
export default{
	data() {
		return {
			
		}
	},
	vuex:{
		actions:{
			fetchArticle,
			fetchSorts,
			fetchTags
		},
		getters:{
			article:getArticle,
			tags:getTags,
			sorts:getSorts,
		}
	},
	ready(){
		const id = this.$route.params.id;
		function toggleDuoshuoComments(container,id){
		    var el = document.createElement('div');//该div不需要设置class="ds-thread"
		    var url= 'http://fishliu.com/article'+id;
		    console.log(url);
		    el.setAttribute('data-thread-key',id);//必选参数
		    el.setAttribute('data-url', url);//必选参数
		    DUOSHUO.EmbedThread(el);
		    jQuery(container).append(el);
		};
		toggleDuoshuoComments('#comment-box',id);
	},
	route: {
      	data({ to: { params: { id } } }) {
        	this.fetchArticle(id);
        	this.fetchSorts();
      		this.fetchTags();
      	},
    },
}
</script>
<style>
.container{
	margin: auto;
}
</style>