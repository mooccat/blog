<template>
	<div class="side-panel">
		<p>标签</p>
		<div v-for="tag in tags">
			<span class="side-span label label-default" v-if="$index%6==0">{{tag.name}}</span>
			<span class="side-span label label-primary" v-if="$index%6==1">{{tag.name}}</span>
			<span class="side-span label label-success" v-if="$index%6==2">{{tag.name}}</span>
			<span class="side-span label label-warning" v-if="$index%6==3">{{tag.name}}</span>
			<span class="side-span label label-danger" v-if="$index%6==4">{{tag.name}}</span>
			<span class="side-span label label-info" v-if="$index%6==5">{{tag.name}}</span>
		</div>
		<div class="clearfix"></div>
	</div>

</template>
<style>
	

</style>
<script>
import {getTags} from '../vuex/getters'
import {fetchTags} from '../vuex/actions'


export default{
	data() {
		return {

		}
	},
			  props:['tags'],

	vuex:{
		actions:{
  			fetchTags
		},
		getters:{
    		tags:getTags
		}
	},
	route: {
     	data() {
        	this.fetchTags();
    	}
    },
}
</script>
