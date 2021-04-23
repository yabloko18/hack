import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TextareaAutosize from 'vue-textarea-autosize'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(TextareaAutosize)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
