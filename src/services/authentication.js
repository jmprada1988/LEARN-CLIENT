import httpClient from './httpClient';
const END_POINT = '/auth'

const logUser = (email, password) => httpClient.post(`${END_POINT}/login`, {email, password});

const registerUser = ({user}) => httpClient.post(`${END_POINT}/register`, {user})
export default {
  logUser,
  registerUser
}