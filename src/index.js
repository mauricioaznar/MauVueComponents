import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false
Vue.http.options.root = (process.env.NODE_ENV === 'development') ? 'http://inoserver.test/api' : 'http://206.189.228.240/api'

new Vue({
  render: h => h(App)
}).$mount('#app')
