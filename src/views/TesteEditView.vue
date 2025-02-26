<script setup>
import { getModelById, updateModel } from '@/api/index.js';
import NavBar from '@/components/NavBar.vue';
import { useUserStore } from '@/stores/userStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const name = ref();
const description = ref();
const privateValue = ref();
const credits = ref();
const route = useRoute();

const userStore = useUserStore()

async function getTodos() {
  const response = await getModelById(userStore.jwt, route.params.id);

  if (!response) return alert("erro");

  name.value = response.name;
  description.value = response.description;
  credits.value = response.credits;
  privateValue.value = response.private;
}

async function handleEdit() {
  const response = await updateModel(userStore.jwt, route.params.id, name.value, description.value, credits.value, privateValue.value)

  console.log(response);

  if (!response) return alert("Erro ao editar modelo");
}

onMounted(getTodos);
</script>

<template>
  <NavBar />

  <main class="provisorio">
    <div class="container">
      <form @submit.prevent="handleEdit()">

        <h1 class="titulo">REPIT</h1>
      <h2 class="subtitulo">Envie um arquivo para impressão:</h2>
        <div class="upload-box">
          <img src="@/assets/images/send-button.svg" alt="Upload Icon" class="upload-icon" />
        </div>
        <div class="inputs">
          <label for="name">Nome do modelo: </label>
          <input v-model.trim="name" type="text" name="name" required />
        </div>
        <div class="inputs">
          <label for="description">Descrição do modelo: </label>
          <textarea v-model.trim="description" name="description" required></textarea>
        </div>
        <div class="inputs">
          <label for="credits">Creditos do modelo: </label>
          <textarea v-model.trim="credits" name="credits" required></textarea>
        </div>
        <div class="inputs checkbox">
          <label for="private">O modelo vai ser privado?: </label>
          <input v-model.trim="privateValue" type="checkbox" name="private" />
        </div>
        <button type="submit" class="button">
          Enviar
        </button>

        <div class="imagem-container">
          <img src="@/assets/images/girl-paisagem.svg" alt="Ilustração" class="imagem-final" />
        </div>
        <p class="aviso">Impressões sujeitas à avaliação.</p>
      </form>
    </div>
  </main>
</template>

<style scoped>
.provisorio {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  position: relative;
  flex-direction: column;
  padding-top: 100px; /* Aumentado para evitar sobreposição do NavBar */
}

.provisorio::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25vh;
  background-color: #32bd7c;
  z-index: -1;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.container {
  width: 90%;
  max-width: 600px;
  text-align: center;
  margin-top: 0;
}

.titulo {
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin-top: 0; /* Ajustado para alinhar corretamente dentro do container */
  margin-bottom: 10px;
}

.subtitulo {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.upload-box {
  background-color: #32bd7c;
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 1rem;
}

.upload-icon {
  width: 50px;
  height: 50px;
}

form {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 1rem auto;
}

.inputs {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
}

.inputs label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.inputs input,
.inputs textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.button {
  background-color: #32bd7c;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background-color: #28a16c;
  transform: scale(1.05);
}

.aviso {
  font-size: 0.9rem;
  margin-top: 1rem;
}

.imagem-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
}

.imagem-final {
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
}
</style>
