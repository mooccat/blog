<template>
	<div class="container" style="margin-top:90px;">
		<div class="tag">
			<h1 style="margin-bottom:30px;">{{addSortInput.title}}</h1>
			<button class="btn btn-primary pull-left" style="margin-bottom:20px;" @click.prevent.stop="showSortForm">{{addSortInput.addBtn}}</button>
			<div class="addSortForm" v-show="sortFormShow">
				<div class="form-group col-md-10">
					<label for="input{{addSortInput.id}}" class="col-sm-4 col-md-4 control-label">{{addSortInput.label}}:</label>
					<div class="col-sm-8 col-md-8">
						<input type="{{addSortInput.type}}" class="form-control" id="input{{addSortInput.id}}" placeholder="{{addSortInput.label}}" v-bind:value="addSortInput.value" v-model="addSortText"></div>
				</div>
				<button class="btn btn-primary pull-right" @click.prevent.stop="addSortEvent">{{addSortInput.confirmBtn}}</button>
			</div>
			<table class="table table-striped table-bordered">
				<tr>
                	<th v-for="th in addSortInput.ths">{{th}}</th> 
                </tr>
  				<tr v-for="sort in sorts">
  					<td>{{sort.name}}</td>
  					<td><a class="glyphicon glyphicon-pencil operatIcon" aria-hidden="true"  @click.prevent.stop="updateSortEvent(sort._id)"></a></td>
  				</tr>
  			</table>
		</div>
		<div class="tag" style="margin-top:60px;">
			<h1 style="margin-bottom:30px;">{{addTagInput.title}}</h1>
			<button class="btn btn-primary pull-left" style="margin-bottom:20px;" @click.prevent.stop="showTagForm">{{addTagInput.addBtn}}</button>
			<div class="addtagForm" v-show="tagFormShow">
				<div class="form-group col-md-10">
					<label for="input{{addTagInput.tagId}}" class="col-sm-4 col-md-4 control-label">{{addTagInput.tagLabel}}:</label>
					<div class="col-sm-8 col-md-8">
						<input type="{{addTagInput.tagType}}" class="form-control" id="input{{addTagInput.tagId}}" placeholder="{{addTagInput.tagLabel}}" v-bind:value="addTagInput.tagValue" v-model="addTagText"></div>
				</div>
				<button class="btn btn-primary pull-right" @click.prevent.stop="addTagEvent">{{addTagInput.confirmBtn}}</button>
			</div>
			<table class="table table-striped table-bordered">
				<tr>
                	<th v-for="th in addTagInput.ths">{{th}}</th> 
                </tr>
  				<tr v-for="tag in tags">
  					<td>{{tag.name}}</td>
  					<td><a class="glyphicon glyphicon-pencil operatIcon" aria-hidden="true"  @click.prevent.stop="updateTagEvent(tag._id)"></a></td>
  				</tr>
  			</table>
		</div>
	</div>
</template>

<script>
import {getAddSortInput,getAddTagInput,getSorts,getTags} from '../vuex/getters';
import {addSort,addTag,fetchSorts,fetchTags} from '../vuex/actions';
export default {
	data(){
		return {
			addSortText:"",
			addTagText:"",
			sortFormShow:false,
			tagFormShow:false,

		}
	},
  	vuex :{
  		actions:{
  			addSort,
  			addTag,
  			fetchSorts,
  			fetchTags
  		},
    	getters:{
    		addSortInput:getAddSortInput,
    		addTagInput:getAddTagInput,
    		sorts:getSorts,
    		tags:getTags
    	}
  	},
  	methods :{
  		showSortForm(){
  			this.sortFormShow = !this.sortFormShow;
  		},
  		showTagForm(){
  			this.tagFormShow = !this.tagFormShow;
  		},
  		addSortEvent(){
  			const sort = {name:this.addSortText};
  			this.addSort(sort); 
  		},
  		addTagEvent(){
  			const tag = {name:this.addTagText};
  			this.addTag(tag);
  		},
  		updateSortEvent(id){
  			console.log(id);
  		},
  		updateTagEvent(id){
  			console.log(id);
  		},
  	},
  	route: {
     	data() {
        this.fetchSorts();
        this.fetchTags();
    	}
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.operatIcon{
	text-align: center;
	width: 100%;
	cursor: pointer;
}
</style>
