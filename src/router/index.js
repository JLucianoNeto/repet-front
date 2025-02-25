import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import TesteView from '@/views/TesteView.vue'
import TesteEditView from '@/views/TesteEditView.vue'
import TesteCriarModeloView from '@/views/TesteCriarModeloView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/teste',
      name: 'teste',
      component: TesteView,
    },
    {
      path: '/testeEdit/:id',
      name: 'testeEdit',
      component: TesteEditView,
    },
    {
      path: '/testeModelo',
      name: 'testeModelo',
      component: TesteCriarModeloView,
    },
  ],
})

export default router
