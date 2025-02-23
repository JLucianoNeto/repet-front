<script setup>
import { RouterLink } from 'vue-router';
import { api } from '@/api/index.js';
import { onMounted, ref } from 'vue';
import NavBar from '@/components/NavBar.vue';


const posts = ref();


</script>


<template>
    <NavBar />
    <main>

        <form action="">
            <div class="inputs">
                <label for="name">Nome do modelo: </label>
                <input v-model.trim="name" type="text" name="name" id="" placeholder="" required />
            </div>
            <div class="inputs">
                <label for="description">Descrição do modelo: </label>
                <textarea v-model.trim="description" name="description" id="" placeholder="" required></textarea>
            </div>
            <div class="inputs">
                <label for="credits">Creditos do modelo: </label>
                <textarea v-model.trim="credits" name="credits" id="" placeholder="" required></textarea>

            </div>
            <div class="inputs">
                <label for="private">O modelo vai ser privado ?: </label>
                <input v-model.trim="private" type="checkbox" name="private" id="" placeholder="" required />
            </div>
            <div class="inputs">
                <label for="modelImage">Selecione as imagens do seu modelo: </label>
                <input type="file" id="myfile" name="modelImage" accept=".jpg, .jpeg, .png" required>
            </div>
            <div class="inputs">
                <label for="myfile2">Selecione o arquivo do modelo (.stl): </label>
                <input type="file" id="myfile2" name="model" accept=".stl" required>
            </div>
            <RouterLink class="button" to="">Enviar modelo</RouterLink>
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