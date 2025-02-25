<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { register } from '@/api/index.js';
import { ref } from 'vue';

const email = ref()
const password = ref()
const name = ref()
const username = ref()
const matricula = ref()
const birthdate = ref()
const phone = ref()


const router = useRouter()


async function handleRegister() {
  const response = await register(username.value, name.value, email.value, matricula.value, phone.value, password.value, birthdate.value);

  console.log(response)

  if (!response) return alert("Erro ao criar novo usuário");

  // const userStore = useUserStore()

  // userStore.authenticaded(response.access, response.refresh)



  await router.push({
    name: 'login'
  })
}
</script>

<template>
  <main>
    <div class="container">
      <div class="left">

        <div class="texto-cadastro">
          <h2>Seja</h2>
          <h2>bem-vindo!</h2>
          <br>
          <p>Cadastre-se agora</p>
          <p>ou</p>
          <p>Faça login</p>
        </div>
        <RouterLink class="button-2" to="login">Entrar</RouterLink>


      </div>

      <div class="right">

        <h2 id="h2-right">Crie sua conta</h2>
        <h3>Preencha seus dados</h3>


        <form @submit.prevent="handleRegister()">
          <div class="inputs">
            <img src="@/assets/images/name-icon.svg" alt="email icon">
            <input v-model.trim="name" type="text" name="name" placeholder="Nome completo" required />
          </div>
          <div class="inputs">
            <img src="@/assets/images/name-icon.svg" alt="username icon">
            <input v-model.trim="username" type="text" name="username" placeholder="Usuário" required />
          </div>
          <div class="inputs">
            <img src="@/assets/images/mail-icon.svg" alt="email icon">
            <input v-model.trim="email" type="email" name="email" placeholder="Email" required />
          </div>

          <div class="inputs">
            <img src="@/assets/images/book-icon.svg" alt="matricula icon">
            <input v-model.trim="matricula" type="text" name="matricula" placeholder="Matrícula (Opcional)" />
          </div>

          <div class="inputs">
            <img src="@/assets/images/book-icon.svg" alt="matricula icon">
            <input v-model.trim="birthdate" type="date" name="birthdate" placeholder="Data de nascimento" required />
          </div>

          <div class="inputs">
            <img src="@/assets/images/phone-icon.svg" alt="phone icon">
            <input v-model.trim="phone" type="text" name="phone" placeholder="Telefone" required />
          </div>
          <div class="inputs">
            <img src="@/assets/images/pass-icon.svg" alt="lock icon">
            <input v-model.trim="password" type="password" name="password" id="" placeholder="Senha" required />
          </div>

          <button class="button" type="submit">Cadastrar</button>

        </form>

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
  max-width: 65vw;
  max-height: 65vh;
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
  width: 15vw;

  & .texto-cadastro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}


h2 {
  width: fit-content;
  text-transform: initial;
  color: var(--white);
  font-weight: 900;
  text-align: center;
  font-size: 3rem;
  margin: 0 0 0 0;
}

#h2-right {
  color: var(--green);

}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;


  margin-left: 4rem;
  margin-right: 4rem;

}

.button {
  text-transform: uppercase;
  width: 20rem;
  padding: .8rem;
  margin-top: 2.5rem;

  background-color: var(--green);
  color: var(--white);
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

.button-2 {
  text-transform: uppercase;
  width: 14rem;
  padding: 1rem;
  margin-top: 1.5rem;
  background-color: var(--green);
  color: var(--white);
  border: 0.2rem solid white;
  border-radius: 2rem;
  font-weight: bolder;
  font-size: 1.5rem;
  text-align: center;
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
  align-items: center;
  gap: 1rem;
}

.inputs {
  display: flex;
  background-color: var(--gray);
  gap: 3rem;
  padding: 1.2rem;
  width: 45rem;
}

.inputs img {
  width: 1.8rem;
}

input {
  background-color: var(--gray);
  border: none;
  width: 100%;
  padding: .5rem;
  outline: none;
}
</style>
