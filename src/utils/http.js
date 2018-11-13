import axios from 'axios'

const http = axios.create()

http.interceptors.response.use(res => {
  // Do something with response data
  return res
}, error => {
  // Do something with response error
  console.log(error)
  return Promise.reject(error)
})

export default http
