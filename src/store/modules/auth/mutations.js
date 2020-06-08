export const mutations = {
  setAuthToken: (state, token) => state.token = token,
  setCurrentUser: (state, user) => state.current_user = user,
  setRegistrationMessage: (state, message) => state.registration_message = message,
  setSnackVisible: (state) => state.showSnack = !state.showSnack
}
