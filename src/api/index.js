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

  if (response.status !== 202) {
    return
  }

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

  if (response.status !== 202) {
    return
  }

  return response.data
}
// export async function createModel(username, name, email, matricula, phone, password) {
//   const response = await api.post('/register', {
//     username,
//     name,
//     email,
//     matricula,
//     phone,
//     password,
//   })

//   if (response.status !== 202) {
//     return
//   }

//   return response.data
// }

// export async function deleteModel(id) {
//   const response = await api.post('/delete', {
//     id,
//   })

//   if (response.status !== 202) {
//     return
//   }

//   return response.status
// }
