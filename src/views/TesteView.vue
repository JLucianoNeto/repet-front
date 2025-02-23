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

    <main>
        <table border="1px">
            <tr v-for="post in posts">
                <td v-for="element in post">{{ element }}</td>

                <td>Excluir</td>
                <td>Editar</td>
            </tr>
        </table>
    </main>
</template>