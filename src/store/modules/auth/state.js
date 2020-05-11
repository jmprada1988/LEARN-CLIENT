export const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  user : {},
  isLoggedIn: false,
  isLoggedOut: true,
  authStatus: ''
}