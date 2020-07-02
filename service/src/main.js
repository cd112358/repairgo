import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import MyHttpServer from './plugins/http.js'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MyHttpServer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  render: h => h(App)
})
