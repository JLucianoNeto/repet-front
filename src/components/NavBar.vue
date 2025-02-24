<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <nav class="navbar">
    <a href="#" class="logo">REPET</a>
    <div class="links-conteiner">
      <ul class="nav-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#impressoes">IMPRESSÕES</a></li>
        <li><a href="#">USUÁRIO</a></li>
        <li><a href="#">SOBRE NÓS</a></li>
      </ul>
      <button class="login-button" @click="goToLogin">LOGIN</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: white;
  z-index: 3;
  top: 0;
}
.logo {
  font-size: 3rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
}
.nav-links {
  list-style: none;
  display: flex;
  font-size: 2.5rem;
  gap: 3.25rem;
}
.nav-links a {
  text-decoration: none;
  color: black;
}

.nav-links a:hover{
  text-decoration: underline;
}

.login-button {
  background-color: black;
  color: white;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-size: 2rem;
}

.login-button:hover {
  opacity: 0.6;
}

.links-conteiner {
  display: flex;
  gap:1.75rem;
  align-items: center;
}



</style>
