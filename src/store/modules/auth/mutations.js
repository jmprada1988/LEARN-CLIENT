import {initiaState} from './helper'

  export const RESET = (state) =>{
    const newState = initiaState()
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    })
  }
  export const auth_request = (state) => {
    state.status = 'loading'
  }
  export const auth_success = (state, {token, user}) => {
    state.status = 'success'
    state.token = token
    state.user = user
    state.isLoggedIn = true,
    state.isLoggedOut = false,
    state.authStatus = 'success'
  }
  export const auth_error = (state) => {
    state.status = 'error'
  }
  export const logout = (state) => {
    state.status = ''
    state.token = ''
  }