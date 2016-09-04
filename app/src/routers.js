export default (router) => router.map({
  '/': {
    name: 'index',
    component: require('./views/index')
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
    component: require('./views/article')
  }, 
})
