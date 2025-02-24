<script setup>
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import CardsSection from '@/components/CardsSection.vue';

</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <section class="repet-section">
      <div class="repet-div">
        <h1>REPET</h1>
      </div>
    </section>
    <CardsSection />
  </main>
</template>

<style scoped>
  .repet-div{
    width: 100%;
    height: 7.25rem;
    background-color: #05F9A3;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .repet-div h1 {
    font-size: 4rem;
  }
</style>
