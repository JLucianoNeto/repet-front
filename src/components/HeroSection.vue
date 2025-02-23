<template>
  <section class="section-container">
    <div class="hero">
      <div class="hero-text">
        <h2>Um novo<br>conceito de <br><div class="highlight"><h2>Reciclagem</h2> <img src="@/assets/images/svg-reciclagem.svg" alt=""></div></h2>
        <p>Repense, Recicle e Reuse.</p>
        <a href="#impressoes" class="catalog-button">Catálogo</a>
      </div>
      <div class="hero-image">
        <img src="@/assets/images/Bgirl.png" alt="Hero Image">
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container{
  margin-top: 7rem;
  padding: 5rem;
}
.hero {
  display: flex;
  align-items: center;
  background-color: #F4F6F5;
  padding: 2.5rem;
  border-radius: 1.563rem;
  width: max-content;
  width: 80%;
}
.hero-text {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-text p {
  font-size: 3rem;
}

.hero h2, .highlight h2 {
  font-size: 10rem;
  font-weight: 900;
}

.hero h2 {
  line-height: 11.188rem;
}

.highlight {
  position: relative;
  z-index: 2;
}

.highlight img {
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 64rem;
}

.catalog-button {
  margin-top: 0.625rem;
  background-color: black;
  color: white;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.513rem;
  cursor: pointer;
  width: max-content;
  font-size: 3rem;
}

.catalog-button:hover {
  opacity: 0.6;
}

.section-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image{
  width: 50%;
}

.hero-image img{
  width: 100%;
}
</style>
