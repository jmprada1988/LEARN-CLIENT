import httpClient from './httpClient';
const END_POINT = '/auth'

const logUser = (email, password) => httpClient.post(`${END_POINT}/login`, {email, password});

export {
  logUser
}