import axios from 'axios';
import { logUser } from '@/services/authentication.api'

export const reset = ({commit}) =>{
  commit('RESET')
}

export const login = async ({commit}, user) => {
  const {email, password} = user
  console.log('user:', email, password)
  try {
    const response = await logUser(email, password)
    const token = response.data.token
    const user = response.data.user
    localStorage.setItem('token', token)
    commit('auth_success', token, user)
  } catch (error) {
    commit('auth_error')
    localStorage.removeItem('token')
  }
}


export const register = ({commit}, user) => {
  return new Promise((resolve, reject) => {
    commit('auth_request')
    axios({url: 'http://localhost:4000/auth/register', data: user, method: 'POST' })
    .then(resp => {
      const token = resp.data.token
      const user = resp.data.user
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = token
      commit('auth_success', token, user)
      resolve(resp)
    })
    .catch(err => {
      commit('auth_error', err)
      localStorage.removeItem('token')
      reject(err)
    })
  })
}
export const logout = ({commit}) => {
  return new Promise((resolve) => {
    commit('logout')
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    resolve()
  })
}