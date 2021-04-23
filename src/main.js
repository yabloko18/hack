import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TextareaAutosize from 'vue-textarea-autosize'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(TextareaAutosize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
