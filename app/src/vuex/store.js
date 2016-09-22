import Vuex from 'vuex';
import Vue from 'vue';
import middlewares from './middlewares';

Vue.use(Vuex);
const state = {
	//post页表单
	postTitle:{
		id: 'Tittle',
		label: '标题',
		type: 'text',
	}, 
	postAuthor:{
		id: 'Author',
		label: '作者',
		type: 'text',
		value: "JHLiu",
	}, 
	postImg:{
		id: 'Img',
		label: '输入图片链接',
		type: 'text',
		value: "",
	},
	sortSelected:{
		id: 'sortSelectedId',
		label: '选择分类：',
	}, 
	tagSelected:{
		id: 'tagSelectedId',
		label: '选择标签：',
	}, 
	//sort页
	addSortInput:{
		title:"分类管理",
		addBtn:"添加分类",
		id:"AddSort",
		label:"输入分类名称",
		confirmBtn:"确认添加",
		ths:["分类","操作"]
	},
	addTagInput:{
		title:"标签管理",
		addBtn:"添加标签",
		tagId:"AddTag",
		tagLabel:"输入标签名称",
		cssId:"AddTagCss",
		cssLabel:"输入标签样式",
		confirmBtn:"确认添加",
		ths:["标签","操作"]
	},
	sorts:[],
	tags:[],
	//文章页
	articleList:[],
	article:{},
};
const mutations = {
	ADD_SORT_SUCCESS(state,sort){
		state.sorts.push(sort);
	},
	ADD_TAG_SUCCESS(state,tag){
		state.tags.push(tag);
	},
	FETCH_SORTS_SUCCESS(state,sorts){
		state.sorts = sorts;
	},
	FETCH_TAGS_SUCCESS(state,tags){
		state.tags = tags;
	},
	UPDATE_SORT_SUCCESS(state,id){

	},
	UPDATE_TAG_SUCCESS(state,id){

	},
	ADD_ARTICLE_SUCCESS(state,article){
		state.articleList.push(article);
	},
	MODIFY_ARTICLE_SUCCESS(state,article){
		state.article = article;
		for (var i = state.articleList.length - 1; i >= 0; i--) {
			if(state.articleList[i]._id== article._id){
				state.articleList[i] = article;
			}
		}
	},
	FETCH_ARTICLELIST_SUCCESS(state,articleList){
		state.articleList=articleList;
	},
	FETCH_ARTICLE_SUCCESS(state,article){
		state.article = article;
	}
};

export default new Vuex.Store({
	state,
	mutations,
	strict: process.env.NODE_ENV !== 'production',
	middlewares,
});