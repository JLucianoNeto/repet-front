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

    <form @submit.prevent="handleEdit()">


      <div class="inputs">
        <label for="name">Nome do modelo: </label>
        <input v-model.trim="name" type="text" name="name" required />
      </div>
      <div class="inputs">
        <label for="description">Descrição do modelo: </label>
        <textarea v-model.trim="description" name="description" placeholder="" required></textarea>
      </div>
      <div class="inputs">
        <label for="credits">Creditos do modelo: </label>
        <textarea v-model.trim="credits" name="credits" placeholder="" required></textarea>
      </div>
      <div class="inputs">
        <label for="private">O modelo vai ser privado ?: </label>
        <input v-model.trim="privateValue" type="checkbox" name="private" />
      </div>
      <!-- <div class="inputs">
                <label for="modelImage">Selecione as imagens do seu modelo: </label>
                <input type="file" id="myfile" name="modelImage" accept=".jpg, .jpeg, .png" required>
            </div>
            <div class="inputs">
                <label for="myfile2">Selecione o arquivo do modelo (.stl): </label>
                <input type="file" id="myfile2" name="model" accept=".stl" required>
            </div> -->
      <!-- <RouterLink class="button" to="">Editar<br>modelo</RouterLink> -->
      <button type="submit" class="button">Editar</button>
    </form>

  </main>
</template>

<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.provisorio {
  margin-top: 25rem;
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
</style>
