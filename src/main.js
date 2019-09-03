import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


//自己写的样式
/*import './style/theme.css'
import './style/characters.css'*/


// 注册element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')



/*new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})*/
