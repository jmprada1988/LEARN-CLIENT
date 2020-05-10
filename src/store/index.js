import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import auth from './modules/auth/index'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    auth,
  },
  // actions: {
  //   reset({commit}) {
  //     Object.keys(modules).forEach(moduleName => {
  //       commit(`${moduleName}/RESET`)
  //     })
  //   }
  // },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})