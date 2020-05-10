export const initiaState = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  user : {},
  counter: 0
})