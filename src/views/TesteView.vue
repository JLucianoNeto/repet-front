<script setup>
import { getAllModels } from '@/api/index.js';
import NavBar from '@/components/NavBar.vue';
import { useUserStore } from '@/stores/userStore';
import { onBeforeMount, ref } from 'vue';

const models = ref([]);
const userStore = useUserStore();

async function getModels() {
  const response = await getAllModels(userStore.jwt)

  if (!response) return alert('Não foi possível retornar os modelos cadastrados!')

  models.value = response;
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
