import axios from "axios";

export const BASE_URL = 'http://localhost:1337';

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  // timeout: 1000
})



export async function login(email, password) {
  const response = await api.post(
    '/login',
    {
      email,
      password,
    }
  );

  if (response.status !== 202){
    return;
  }

  return response.data;

}