import  api  from '../../../services/authentication'
import { router } from '../../../router/router'


export const actions = {
  register: async ({ commit }, user) => {
    console.log('REquest:', user)
    const {data} = await api.registerUser(user)
    console.log('REsponse data: ', data)
    commit('setRegistrationMessage', data.message)
    commit('setSnackVisible')
    router.push('/')
  },
  login: async ({ commit }, user) => {
    const { data } = await api.logUser(user)
    window.localStorage.setItem('authToken', data.token)
    commit('setAuthToken', data.token)
    commit('setCurrentUser', data.user)
    router.push('courses')
  },
  logout: ({ commit }) => {
    commit('setAuthToken', null)
    commit('setCurrentUser', null)
    window.localStorage.removeItem('authToken')
    router.push('/')
  }
}


