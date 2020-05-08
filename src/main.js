import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router/routes'
import store from './store/index'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
