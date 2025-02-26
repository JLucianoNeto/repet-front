<script setup>
import { storeModel } from '@/api';
import NavBar from '@/components/NavBar.vue';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';

const name = ref();
const description = ref();
const credits = ref();
const privateValue = ref();

const userStore = useUserStore();

async function handleCreation() {
  const response = await storeModel(userStore.jwt, name.value, description.value, credits.value, privateValue.value);

  if (!response) return alert('Ocorreu um erro ao criar o modelo.')

  return alert('Modelo criado com sucesso!')
}
</script>

<template>
  <NavBar />
  <main>
    <div class="spacer"></div>
    <div class="container">
      <h1 class="form-title">REPET</h1>
      <p class="form-subtitle">Envie um arquivo para impressão:</p>
      <form @submit.prevent="handleCreation()">
        <div class="file-upload">
          <label for="myfile2" class="file-label">
            <img src="@/assets/images/send-button.svg" alt="Upload" class="upload-icon" />
            <input type="file" id="myfile2" name="model" accept=".stl" hidden>
          </label>
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
        <div class="inputs">
          <label for="private">O modelo vai ser privado ?: </label>
          <input v-model.trim="privateValue" type="checkbox" name="private">
        </div>
        <div class="inputs file-input-container">
          <label for="modelImage">Selecione as imagens do seu modelo: </label>
          <label for="myfile" class="file-button">Escolher arquivo</label>
          <input type="file" id="myfile" name="modelImage" accept=".jpg, .jpeg, .png" hidden>
        </div>

        <button type="submit" class="button">Enviar</button>
        <p class="form-note">Impressões sujeitas a avaliação.</p>
      </form>
      <div class="image-preview">
        <img src="@/assets/images/girl-paisagem.svg" alt="Preview" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spacer {
  height: 3rem;
}

.container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  width: 70%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.form-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
}

.file-upload {
  background-color: #32bd7c;
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.file-label {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.upload-icon {
  width: 50px;
  height: 50px;
}

.inputs {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

.file-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.file-button {
  text-transform: uppercase;
  width: 14rem;
  padding: .8rem;
  background-color: var(--green);
  color: var(--white);
  border: none;
  border-radius: 2rem;
  font-weight: bolder;
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
  transition-duration: 300ms;
}

.file-button:hover {
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.445);
  background-color: #32bd7c;
  transition-duration: 300ms;
}

.button {
  text-transform: uppercase;
  width: 14rem;
  padding: .8rem;
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
  background-color: #32bd7c;
  transition-duration: 300ms;
}

.form-note {
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
}

.image-preview {
  margin-top: 1rem;
  text-align: center;
}

.image-preview img {
  max-width: 100%;
  border-radius: 1rem;
}
</style>
