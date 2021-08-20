<template>
  <header class="masthead bg-secondary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Avatar Image-->
      <img
        class="masthead-avatar mb-5 avatar-perso"
        src="~/assets/img/avatar.jpg"
        alt="avatar de laurent savarit"
      />


      <h1 class="masthead-heading text-uppercase mb-0">Laurent Savarit</h1>

      <div class="divider-custom divider-light">

        <div class="divider-custom-icon">
          <font-awesome-icon aria-label="logo javascript" :icon="brand.faJs" />
          <font-awesome-icon aria-label="logo vue js" :icon="brand.faVuejs" />
          <font-awesome-icon aria-label="logo react" :icon="brand.faReact" />
          <font-awesome-icon aria-label="logo node js" :icon="brand.faNodeJs" />
          <font-awesome-icon aria-label="logo git" :icon="brand.faGitSquare" />
          <font-awesome-icon
            aria-label="logo bootstrap"
            :icon="brand.faBootstrap"
          />
        </div>

      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0">
        Développeur Web fullstack javaScript
      </p>
      <a
        class="btn btn-success btn-xl my-4"
        href="/docs/cv.pdf"
        target="_blank"
        title="télécharge mon CV"
        ><i class="fas fa-download"></i> Télécharger mon CV</a
      >
    </div>
  </header>
</template>

<script>
import { fas } from "@fortawesome/free-solid-svg-icons";
import * as brand from "@fortawesome/free-brands-svg-icons";


export default {
  name: "Header",

  computed: {
    fas() {
      return fas;
    },

    brand() {
      return brand;
    },
  },
};
</script>

<style scoped>
.avatar-perso {
  border-radius: 10%;
}
</style>
