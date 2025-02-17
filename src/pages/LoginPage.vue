<script setup>
  import { ref } from 'vue'

  const username = ref('')
  const password = ref('')

  const handleSubmit = () => {
    // Lógica de autenticação aqui
    console.log('Login attempt:', username.value, password.value)
  }
  </script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="welcome-text">Seja<br>Bem-vindo!</h1>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <input
            type="text"
            v-model="username"
            placeholder="Email/Usuário/Matrícula"
            class="form-input"
            required
          >
        </div>

        <div class="form-group">
          <input
            type="password"
            v-model="password"
            placeholder="Senha"
            class="form-input"
            required
          >
        </div>

        <a href="#" class="forgot-password">Esqueci minha senha.</a>

        <button type="submit" class="login-button">ENTRAR</button>
      </form>

      <div class="register-section">
        Não tem conta?<br>
        <a href="#" class="register-link">Cadastre-se</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  background: white;
  padding: 2rem 3rem;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
  width: 350px;
}

.welcome-text {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.forgot-password {
  display: block;
  margin: 1rem 0;
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #45a049;
}

.register-section {
  margin-top: 2rem;
  color: #666;
}

.register-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
}
</style>
