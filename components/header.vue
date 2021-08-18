<template>
  <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <!-- Masthead Avatar Image-->
                <img class="masthead-avatar mb-5 avatar-perso" src="~/assets/img/avatar.jpg" alt="avatar de laurent savarit" />

                <!-- Masthead Heading-->
                <h1 class="masthead-heading text-uppercase mb-0">Laurent Savarit</h1>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-chevron-down"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Masthead Subheading-->
                <p class="masthead-subheading font-weight-light mb-0">Développeur Web fullstack javaScript</p>
                <a class="btn btn-secondary btn-xl my-4" href="/docs/cv.pdf" target="_blank"><i class="fas fa-download"></i> Télécharger mon CV</a>
            </div>
        </header>
</template>

<script>
export default {
  name:"Header",
}
</script>

<style scoped>

.avatar-perso{
  border-radius: 10%;
}

</style>
