<template>
  <header>
    <nav
      class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container">
        <NuxtLink class="navbar-brand" to="/" title="Retour à l'accueil">Laurent Savarit</NuxtLink>
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
export default {
  name: "Nav",
};
</script>
