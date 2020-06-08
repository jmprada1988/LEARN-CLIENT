
export const getters = {
  isLoggedIn: state => !!state.token,
  getCurrentUser: state => state.current_user ? state.current_user : {},
  getSanckMessage: state => state.registration_message.length ?  state.registration_message : '',
  getSnackStatus: state => !!state.showSnack
}

