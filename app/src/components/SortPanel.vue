<template>
	<div class="side-panel">
		<p>分类</p>
		<div v-for="sort in sorts">
			<a href="#/sort/{{sort._id}}" class="side-span label label-default" v-if="$index%6==0">{{sort.name}}</a>
			<a href="#/sort/{{sort._id}}" class="side-span label label-primary" v-if="$index%6==1">{{sort.name}}</a>
			<a href="#/sort/{{sort._id}}" class="side-span label label-success" v-if="$index%6==2">{{sort.name}}</a>
			<a href="#/sort/{{sort._id}}" class="side-span label label-warning" v-if="$index%6==3">{{sort.name}}</a>
			<a href="#/sort/{{sort._id}}" class="side-span label label-danger" v-if="$index%6==4">{{sort.name}}</a>
			<a href="#/sort/{{sort._id}}" class="side-span label label-info" v-if="$index%6==5">{{sort.name}}</a>
		</div>
		<div class="clearfix"></div>

	</div>
</template>
<style>
	

</style>
<script>
import {getSorts} from '../vuex/getters'
import {fetchSorts} from '../vuex/actions'


export default{
	data() {
		return {

		}
	},
		  props:['sorts'],

	vuex:{
		actions:{
  			fetchSorts
		},
		getters:{
    		sorts:getSorts
		}
	},
	route: {
     	data() {
        	this.fetchSorts();
    	}
    },
}
</script>
