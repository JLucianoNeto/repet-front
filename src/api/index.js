import axios from 'axios'

export const BASE_URL = 'http://localhost:1337'

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  // timeout: 1000
})

export async function login(email, password) {
  const response = await api.post('/login', {
    email,
    password,
  })

  if (response.status !== 202) return false

  return response.data
}

export async function register(username, name, email, matricula, phone, password) {
  const response = await api.post('/register', {
    username,
    name,
    email,
    matricula,
    phone,
    password,
  })

  if (response.status !== 202) return false

  return response.data
}
export async function createModel(username, name, email, matricula, phone, password) {
  const response = await api.post('/register', {
    username,
    name,
    email,
    matricula,
    phone,
    password,
  })

  if (response.status !== 202) return false

  return response.data
}

export async function storeModel(name, description, credits, privateValue) {
  const response = await api.post('/models', { name, description, credits, privateValue })

  return {
    success: response.status === 201,
    data: response.data,
  }
}

export async function getModelById(id) {
  const response = await api.get(`/models/${id}`)

  return response.status === 200 ? response.data : false
}

export async function updateModel(id, name, description, credits, privateValue) {
  const response = await api.put(`/models/${id}`, { name, description, credits, privateValue })

  return {
    success: response.status === 202,
    data: response.data,
  }
}

export async function deleteModel(id) {
  const response = await api.delete('/delete', {
    id,
  })

  if (response.status !== 204) {
    return
  }

  return response.status
}
