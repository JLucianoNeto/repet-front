<script setup>
  defineProps({
    image: String,
    title: String,
    description: String,
  });
</script>

<template>
  <div class="card">
    <img :src="image" :alt="title" class="card-image" />
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
    <a href="#" class="card-link">→</a>
  </div>
</template>

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 33%;
}
.card-image {
  width: 100%;
  border-radius: 0.625rem;
}
.card-title {
  font-size: 1.25rem;
  margin: 0.75rem 0;
}
.card-description {
  color: #666;
  font-size: 1rem;
}

.card h3, .card p{
  font-size: 2.25rem;
}

.card-link {
  display: block;
  margin-top: 0.5rem;
  font-size: 3rem;
  text-decoration: none;
  color: black;
}
</style>
