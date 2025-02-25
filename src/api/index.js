import axios from 'axios'

export const BASE_URL = 'http://localhost:5500'

export const api = axios.create({
  baseURL: `${BASE_URL}`,
  validateStatus: (status) => status >= 200 && status <= 500,
  // timeout: 1000
})

export async function login(email, password) {
  const response = await api.post('/users/login', {
    email,
    password,
  })

  if (response.status !== 202) return false

  return response.data
}

export async function register(
  username,
  displayName,
  email,
  registration,
  phone,
  password,
  birthdate,
) {
  const response = await api.post('/users', {
    username,
    display_name: displayName,
    email,
    registration,
    phone,
    password,
    birthdate,
  })

  if (response.status !== 201) return false

  return response.data
}

export async function storeModel(token, name, description, credits, privateValue) {
  const response = await api.post(
    '/models',
    { name, description, credits, privateValue },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return {
    success: response.status === 201,
    data: response.data,
  }
}

export async function getModelById(token, id) {
  console.log(`Bearer ${token}`)
  const response = await api.get(`/models/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.status === 200 ? response.data : false
}

export async function updateModel(token, id, name, description, credits, privateValue) {
  const response = await api.put(
    `/models/${id}`,
    { name, description, credits, privateValue },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return {
    success: response.status === 202,
    data: response.data,
  }
}

export async function deleteModel(token, id) {
  const response = await api.delete(
    '/delete',
    {
      id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (response.status !== 204) {
    return
  }

  return response.status
}
