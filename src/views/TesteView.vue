<script setup>
import { RouterLink } from 'vue-router';
import { api } from '@/api/index.js';
import { onMounted, ref } from 'vue';
import NavBar from '@/components/NavBar.vue';

const posts = ref();
const attributeNames = ref();


async function getTodos() {
    const response = await api.get('https://jsonplaceholder.typicode.com/posts');

    posts.value = response.data;

    attributeNames.value = Object.keys(posts.value);
}

onMounted(getTodos);
</script>


<template>
    <NavBar />

    <main class="main">
        <div class="gallery">

            <div v-for="post in posts" class="container">
                <img src="@/assets/images/pass-icon.svg" alt="placeholder">
                <h3>{{ post.title }}</h3>
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


.container {
    background-color: burlywood;
    display: flex;
    width: 35rem;
    height: 35rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7rem;
    border-radius: 2rem;
}

.conteudo {
    flex-direction: row;

}
</style>