import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    id: Number(localStorage.getItem('id')),
    username: localStorage.getItem('username') || '',
    email: localStorage.getItem('email') || '',
    role: {
      name: localStorage.getItem('role') || '',
    },
  })

  const jwt = ref(localStorage.getItem('jwt') || '')
  const refresh = ref(localStorage.getItem('refresh') || '')

  const role = computed(() => user.value.role.name)
  const username = computed(() => user.value.username)
  const isAuthenticated = computed(() => jwt.value !== '')
  const id = computed(() => user.value.id.toString())

  function authenticaded(access, refreshToken) {
    jwt.value = access
    refresh.value = refreshToken

    localStorage.setItem('jwt', access)
    localStorage.setItem('refresh', refreshToken)
  }

  // function authenticaded(authUser, token) {
  //   user.value = authUser
  //   jwt.value = token

  //   localStorage.setItem('username', authUser.username)
  //   localStorage.setItem('id', authUser.id.toString())
  //   localStorage.setItem('email', authUser.email)
  //   localStorage.setItem('role', authUser.role.name)
  //   localStorage.setItem('jwt', token)
  // }

  function logout() {
    jwt.value = ''
    refresh.value = ''

    user.value = {}

    localStorage.clear()
  }

  return { user, username, jwt, refresh, role, id, isAuthenticated, authenticaded, logout }
})
