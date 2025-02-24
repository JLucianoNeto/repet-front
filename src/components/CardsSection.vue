<script setup lang="ts">
import ModelCard from './ModelCard.vue';

</script>

<template>
  <section class="cards-section" id="impressoes">
    <div class="text-container">
      <h2>
        Impressões
      </h2>
      <img src="@/assets/images/svg-impessoes.svg" alt="">
    </div>
      <div class="cards-container">
      <ModelCard
        image="/src/assets/images/card-samurai.png"
        title="Figure Art Samurai"
        description="Saiba mais"
      />
      <ModelCard
        image="/src/assets/images/card-cubo.png"
        title="Fidget Cube Infinito"
        description="Saiba mais"
      />
      <ModelCard
        image="/src/assets/images/card-chaveiro.png"
        title="Chaveiro Jogo da Velha"
        description="Saiba mais"
      />
    </div>
  </section>
</template>

<style scoped>

.cards-section{
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 60%;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

h2 {
  font-weight: 900;
  margin: 2rem 0;
  font-size: 3.75rem;}

.text-container{
  position: relative;
}

.text-container img{
  position: absolute;
    bottom: 30px;
    z-index: -1;
    left: -14px;
}
</style>
