export const state = {
  token: window.localStorage.getItem('authToken'),
  current_user: null,
  registration_message: '',
  showSnack: false
}