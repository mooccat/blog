import Api from '../api';

export const addSort = ({dispatch}, sort) => {
   Api.addSort(sort).then(response => {
      console.log(response.data);
      dispatch('ADD_SORT_SUCCESS',response.data.data);
  }, err => {
    
  });
};
export const addTag = ({dispatch}, tag) => {
  Api.addTag(tag).then(response => {
    dispatch('ADD_TAG_SUCCESS', response.data.data);
  }, err => {

  });
};

export const fetchSorts = ({dispatch}) => {
  Api.fetchSorts().then(response => {
    dispatch('FETCH_SORTS_SUCCESS', response.data.data);
  }, err => {

  });
};

export const fetchTags = ({dispatch}) => {
  Api.fetchTags().then(response => {
    dispatch('FETCH_TAGS_SUCCESS', response.data.data);
  }, err => {

  });
};

export const addArticle = ({dispatch},article) => {
  return Api.addArticle(article).then(response => {
    dispatch('ADD_ARTICLE_SUCCESS', response.data.data);
    return  Promise.resolve(response.data.data._id);
  }, err => {

  });
};

export const modifyArticle = ({dispatch},article,id) => {
  return Api.modifyArticle(article,id).then(response => {
    dispatch('MODIFY_ARTICLE_SUCCESS', response.data.data);
    return  Promise.resolve(response.data.data._id);
  }, err => {

  });
};

export const fetchArticleList = ({dispatch}) => {
  Api.fetchArticleList().then(response => {
    dispatch('FETCH_ARTICLELIST_SUCCESS', response.data.data);
  }, err => {

  });
};

export const fetchArticle = ({dispatch},id) => {
  return Api.fetchArticle(id).then(response => {
    dispatch('FETCH_ARTICLE_SUCCESS', response.data.data);
    return  Promise.resolve(response.data.data);

  }, err => {

  });
};