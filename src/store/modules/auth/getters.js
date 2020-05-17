export const getters = {
  isLoggedIn: state => !!state.token,
  getCurrentUser: state => state.current_user ? state.current_user : {}
}

