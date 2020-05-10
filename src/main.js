import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/router'





new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
