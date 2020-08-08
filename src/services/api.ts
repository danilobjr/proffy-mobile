import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.25.55:9000'
})

export { api }
