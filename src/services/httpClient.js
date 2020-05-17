import axios from 'axios'
const httpClient = axios.create({
  baseURL:process.env.VUE_APP_BASE_URL,
  timeout: 1000, // indicates, 1000ms ie. 1 second
  headers: {
      "Content-Type": "application/json",
  }
});
const getAuthToken = () => window.localStorage.getItem('authToken');

const authInterceptor = (config) => {
    config.headers['Authorization'] = getAuthToken();
    return config;
}

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;