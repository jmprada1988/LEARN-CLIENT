import  api  from '../../../services/authentication'
import { router } from '../../../router/router'


export const actions = {
  register: async ({ commit }, user) => {
    const response = await api.registerUser(user)
    window.localStorage.setItem('authToken', response.token)
    commit('setAuthToken', response.token)
    commit('setCurrentUser', response.user)
    router.push('/')
  },
  login: async ({ commit }, user) => {
    const { data } = await api.logUser(user)
    window.localStorage.setItem('authToken', data.token)
    commit('setAuthToken', data.token)
    commit('setCurrentUser', data.user)
    router.push('/')
  },
  logout: ({ commit }) => {
    commit('setAuthToken', null)
    commit('setCurrentUser', null)
    window.localStorage.removeItem('authToken')
    router.push('/')
  }
}


