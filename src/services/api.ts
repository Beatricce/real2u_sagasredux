import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:4040/dev/todos"
})

export default api