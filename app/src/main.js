import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routers'
import { timeToNow,IdToName } from './filters'

import store from './vuex/store'

Vue.filter('timeToNow',timeToNow)
Vue.filter('IdToName',IdToName)
Vue.use(VueRouter)
const router = new VueRouter(
  {
  	// history: true, //html5模式 去掉锚点
  }
)
configRouter(router)
router.start(Vue.extend(App), 'app')
