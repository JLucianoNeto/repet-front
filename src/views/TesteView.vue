<script setup>
// import { getAllModels } from '@/api/index.js';
import NavBar from '@/components/NavBar.vue';
// import { useUserStore } from '@/stores/userStore';
import { onBeforeMount, ref } from 'vue';

const models = ref([
  { id: 1, name: "Modelo 1", description: "Descrição do modelo 1" },
  { id: 2, name: "Modelo 2", description: "Descrição do modelo 2" },
  { id: 3, name: "Modelo 3", description: "Descrição do modelo 3" },
  { id: 4, name: "Modelo 4", description: "Descrição do modelo 4" },
  { id: 5, name: "Modelo 5", description: "Descrição do modelo 5" },
  { id: 6, name: "Modelo 6", description: "Descrição do modelo 6" },
  { id: 7, name: "Modelo 7", description: "Descrição do modelo 7" },
  { id: 8, name: "Modelo 8", description: "Descrição do modelo 8" },
  { id: 9, name: "Modelo 9", description: "Descrição do modelo 9" },
  { id: 10, name: "Modelo 10", description: "Descrição do modelo 10" },
  { id: 11, name: "Modelo 11", description: "Descrição do modelo 11" },
  { id: 12, name: "Modelo 12", description: "Descrição do modelo 12" },
  { id: 13, name: "Modelo 13", description: "Descrição do modelo 13" },
  { id: 14, name: "Modelo 14", description: "Descrição do modelo 14" },
  { id: 15, name: "Modelo 15", description: "Descrição do modelo 15" },
  { id: 16, name: "Modelo 16", description: "Descrição do modelo 16" },
  { id: 17, name: "Modelo 17", description: "Descrição do modelo 17" },
  { id: 18, name: "Modelo 18", description: "Descrição do modelo 18" },
  { id: 19, name: "Modelo 19", description: "Descrição do modelo 19" },
  { id: 20, name: "Modelo 20", description: "Descrição do modelo 20" },
  { id: 21, name: "Modelo 21", description: "Descrição do modelo 21" },
  { id: 22, name: "Modelo 22", description: "Descrição do modelo 22" },
  { id: 23, name: "Modelo 23", description: "Descrição do modelo 23" },
  { id: 24, name: "Modelo 24", description: "Descrição do modelo 24" },
  { id: 25, name: "Modelo 25", description: "Descrição do modelo 25" },
  { id: 26, name: "Modelo 26", description: "Descrição do modelo 26" },
  { id: 27, name: "Modelo 27", description: "Descrição do modelo 27" },
  { id: 28, name: "Modelo 28", description: "Descrição do modelo 28" },
  { id: 29, name: "Modelo 29", description: "Descrição do modelo 29" },
  { id: 30, name: "Modelo 30", description: "Descrição do modelo 30" }]);
// const userStore = useUserStore();

console.log (models)

async function getModels() {
  // const response = await getAllModels(userStore.jwt)

  // if (!response) return alert('Não foi possível retornar os modelos cadastrados!')

  // models.value = response;
}

onBeforeMount(getModels);
</script>


<template>
  <NavBar />

  <main class="main">
    <div class="gallery">

      <!-- <div v-for="post in posts" class="container">
        <img src="@/assets/images/pass-icon.svg" alt="placeholder">
        <h3>{{ post.title }}</h3>
      </div> -->

      <div v-for="model in models" class="container" v-bind:key="model.id">
        <img src="@/assets/images/pass-icon.svg" alt="placeholder">
        <h3>{{ model.name }}</h3>
        <p>{{ model.description }}</p>
      </div>

    </div>
  </main>
</template>


<style scoped>
.main {
  margin: 10rem 22rem;
  display: flex;

}

img {
  width: 15rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

}

h3 {
  font-weight: bolder;
}


.container {
  background-color: burlywood;
  display: flex;
  max-width: 65rem;
  max-height: 65rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
}

.conteudo {
  flex-direction: row;

}
</style>
