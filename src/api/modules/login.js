import axios from 'axios';
var instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
  });
export function login(username, password) {
    return instance({
      url: '/user/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
  }
  
  export function getInfo(token) {
    return instance({
      url: '/user/info',
      method: 'get',
      params: { token }
    })
  }
  
  export function logout() {
    return instance({
      url: '/user/logout',
      method: 'post'
    })
  }