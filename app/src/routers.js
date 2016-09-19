export default (router) => router.map({
  '/': {
    name: 'index',
    component: require('./views/index')
  },
  '/post': {
  	name:'post',
  	component: require('./views/post')
  },
  '/sort':{
    name:'sort',
    component: require('./components/Sort')
  },
  '/article/:id': {
    name:'article',
    component: require('./views/article')
  }, 
  '/post/:id': {
    name:'edit',
    component: require('./views/postArticle')
  }, 
})
