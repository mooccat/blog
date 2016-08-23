export default (router) => router.map({
  '/': {
    name: 'index',
    component: require('./components/Navbar')
  },
  '/hello': {
    name: 'hello',
    component: require('./components/Hello')
  },
  '/post': {
  	name:'post',
  	component: require('./components/Post')
  },
  '/article': {
  	name:'article',
  	component: require('./components/ArticleList')
  },
   '/article/:id': {
  name:'article',
  component: require('./components/Article')
  },
})
