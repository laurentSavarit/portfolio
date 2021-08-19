<template>
  <div>
    <Nav />
    <main class="masthead bg-secondary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Heading-->
        <h1 class="masthead-heading text-uppercase mb-0">erreur 404</h1>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <p class="masthead-subheading font-weight-light mb-4">
          "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes,
          le nord, suivant comment on est tourné, ça change tout !"
          <em class="auteur">Perceval</em>
        </p>
        <p class="masthead-subheading font-weight-light mb-4">
          "Donc, pour résumer, je suis souvent victime des colibris,
          sous-entendu des types qu’oublient toujours tout. Euh, non... Bref,
          tout ça pour dire, que je voudrais bien qu’on me considère en tant que
          tel." <em class="auteur">Perceval</em>
        </p>

        <NuxtLink
          class="btn btn-primary btn-xl my-4"
          to="/"
          title="retourner à l'accueil..."
          >Retour l 'accueil</NuxtLink
        >
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";

import Nav from "../components/nav.vue";

export default {
  components: {
    Nav,
    Footer,
  },
  props: ["error"],
  layout: "error",

  data() {
    return {
      title: "ressource introuvable",
    };
  },

  head() {
    return {
      title: document.title + "-" + this.title,
    };
  },
};
</script>

<style scoped>
.auteur {
  font-style: italic;
  font-weight: 700;
}
</style>
