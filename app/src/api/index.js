'use strict'

import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
const baseUrl = 'http://localhost:3000/';


export default {
  addSort: (sort) => {
    return Vue.resource(baseUrl+'sort').save(sort);
  },
  addTag: (tag) => {
    return Vue.resource(baseUrl+'tag').save(tag);
  },
  fetchSorts:() => {
  	return Vue.resource(baseUrl+'sort').get();
  },
  fetchTags:() => {
  	return Vue.resource(baseUrl+'tag').get();
  },
  addArticle: (article) => {
    return Vue.resource(baseUrl+'article').save(article);
  },
  modifyArticle: (article,params) => {
    return Vue.resource(baseUrl+'article/'+params).update(article);
  },
  fetchArticleList: () => {
    return Vue.resource(baseUrl+'article').get();
  },
  fetchArticle: (params) => {
    return Vue.resource(baseUrl+'article/'+params).get();
  },
  fetchSortList: (params) => {
    return Vue.resource(baseUrl+'sort/'+params).get();
  },
  fetchTagList: (params) => {
    return Vue.resource(baseUrl+'tags/'+params).get();
  },
};
