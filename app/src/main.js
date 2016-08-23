import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routers'
import VueResource  from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter(
  {
  	// history: true, //html5模式 去掉锚点
  }
)
configRouter(router)
router.start(Vue.extend(App), 'app')
