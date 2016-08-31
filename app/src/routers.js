export default (router) => router.map({
  '/': {
    name: 'index',
    component: require('./components/ArticleList')
  },
  '/post': {
  	name:'post',
  	component: require('./components/Post')
  },
  '/sort':{
    name:'sort',
    component: require('./components/Sort')
  },
   '/article/:id': {
    name:'article',
    component: require('./components/Article')
  },
})
