
  export const authStatus = state => state.status
  export const isLoggedOut = state => !state.token
  export const isLoggedIn = state => !!state.token
  export const logout = state => !state.token


