<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <div class="container">
      <div class="left">
        <h2>Seja<br>bem-vindo!</h2>

        <form>
          <div class="inputs">
            <img src="@/assets/images/mail-icon.svg" alt="email icon">
            <input type="email" name="email" id="" placeholder="Email / Usuário / Matrícula" required />
          </div>
          <div class="inputs">
            <img src="@/assets/images/pass-icon.svg" alt="lock icon">
            <input type="password" name="password" id="" placeholder="Password" required />
          </div>

          <RouterLink>Esqueceu sua senha?</RouterLink>
          <button class="button" type="submit">Entrar</button>

          <p>Não tem conta?</p>
          <RouterLink class="button" to="register">Cadastre-se</RouterLink>
        </form>
      </div>

      <div class="right">
        <img src="@/assets/images/girl.svg" alt="girl recycling" />
        <img src="@/assets/images/boy.svg" alt="boy recycling" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.container {
  max-width: 60vw;
  max-height: 50vh;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  box-shadow: .4rem .4rem 1rem rgba(0, 0, 0, 0.445);
}

div.container>div {
  padding: 2rem;
}

/* div.left,
div.right {
  flex: 1;
} */

div.left {
  background-color: var(--green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
}

h2 {
  width: fit-content;
  text-transform: initial;
  color: var(--white);
  font-weight: 900;
  text-align: center;
  font-size: 3rem;
  margin: 0 0 2rem 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.button {
  text-transform: uppercase;
  width: 14rem;
  padding: .8rem;
  background-color: var(--white);
  color: var(--green);
  border: none;
  border-radius: 2rem;
  font-weight: bolder;
  font-size: 1.5rem;
  text-align: center;
  transition-duration: 300ms;

}

.button:hover {
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.445);
  background-color: var(--bg-white);
  transition-duration: 300ms;
}

p {
  color: var(--white);
  font-weight: 500;
}

img {
  width: 15rem;
}

div.right {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.inputs {
  display: flex;
  background-color: var(--white);
  gap: 3rem;
  padding: 1.2rem;
  width: 45rem;
}

.inputs img {
  width: 1.8rem;
}

input {
  background-color: var(--white);
  border: none;
  width: 100%;
  padding: .5rem;
  outline: none;
}
</style>
