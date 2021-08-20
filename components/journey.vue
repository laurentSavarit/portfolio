<template>
  <!-- About Section-->
  <section class="page-section bg-secondary text-white mt-5" id="about">
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-white mt-4">
        Mon Parcours
      </h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>

      <!-- About Section Content-->
      <div class="container tree">
      <div class="row justify-content-center">
        <p class="col-lg-6 biography my-5 p-4">
          Issu du milieu de la restauration rapide, directeur d'une grande
          enseigne puis chef d'entreprise de 4 établissements d'une enseigne
          nationale de pizzas à emporter, j'ai décidé, à 36 ans, de me
          reconvertir...
        </p>
</div>
<div class="row justify-content-start">
        <p class="col-lg-6 biography my-5 p-4">
          ...Je me suis toujours intéressé de près ou de loin au code depuis
          l'âge de 16 ans. Il est possible que la crise sanitaire ma donnée la
          motivation nécessaire pour franchir ce cap: changer de vie. Pas facile
          lorsque notre vie est bien installée...
        </p>
</div>
<div class="row justify-content-end">
        <p class="col-lg-6 biography my-5 p-4">
          ....J'ai donc réalisé une formation de développeur fullstack
          JavaScript au sein de l'école O'Clock. Depuis le début, ma préférence
          va pour le back end, j'apprécie énormément NodeJS et PostegreSQL.
        </p>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Journey",
};
</script>

<style scoped>

@keyframes defile{
  0%{
    background-position-y: -220vh;
  }
  100%{
    background-position-y: 200vh;
  }
}

.tree {
  padding: 2em;
  background: url("~/assets/img/tree.svg");
  background-repeat: no-repeat;
  background-position-x:center;
  background-size: 100% auto;
  animation: defile 30s linear infinite;
}

.biography{
  font-size: 1.5rem;
  text-shadow: 2px 2px 1px black;
  background:rgba(255,255,255,.1);
  backdrop-filter: blur(.15rem);
  border-radius:1rem;
}
</style>
