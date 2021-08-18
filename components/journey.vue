<template>
   <!-- About Section-->
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">

                <!-- About Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-white">Mon Parcours</h2>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-chevron-down"></i></div>
                    <div class="divider-custom-line"></div>

                </div>

                <!-- About Section Content-->
                <div class="row">
                    <img class="tree" src="~/assets/img/tree.png" alt="mon parcours de compétences">
                </div>

            </div>
        </section>
</template>

<script>
export default {
  name:"Journey"
}
</script>

<style scoped>
  .tree{
    filter: drop-shadow(2px 2px 1px black)
  }
</style>
