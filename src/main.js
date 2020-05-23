import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import { router } from './router/router'
import vuetify from './plugins/vuetify';


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
