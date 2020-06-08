import httpClient from './httpClient';
const END_POINT = '/auth'

const logUser = ({email, password}) => httpClient.post(`${END_POINT}/login`, {email, password});

const registerUser = ({name, lastname, email, password,confirmPassword, country, state, city}) => httpClient.put(`${END_POINT}/signup`, {name, lastname, email, password,confirmPassword, country, state, city})
export default {
  logUser,
  registerUser
}