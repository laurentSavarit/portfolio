<template>
  <header>
    <nav
      class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container">
        <NuxtLink class="navbar-brand" to="/" title="Retour à l'accueil">
          Laurent Savarit
          <div class="divider-custom divider-light my-0">
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
        </NuxtLink>
        <button
          class="
            navbar-toggler
            text-uppercase
            font-weight-bold
            bg-primary
            text-white
            rounded
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <NuxtLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/portfolio" title="Découvre mon portfolio"
                >Mon portfolio</NuxtLink
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <NuxtLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/parcours" title="Découvre mon parcours"
                >Mon parcours</NuxtLink
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <NuxtLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/contact" title="Contacte moi"
                >Me contacter</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

import { fas } from "@fortawesome/free-solid-svg-icons";
import * as brand from "@fortawesome/free-brands-svg-icons";

export default {
  name: "Nav",

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
