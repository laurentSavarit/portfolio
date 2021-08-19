<template>
<div>
  <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <!-- Footer Location-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h2 class="text-uppercase mb-4">Localisation</h2>
                        <p class="lead mb-0">
                            Saint André de Cubzac<br/>
                            33240 (Gironde)
                        </p>
                    </div>
                    <!-- Footer Social Icons-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h2 class="text-uppercase mb-4">Me suivre</h2>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.github.com/laurentSavarit" target="_blank" rel="noreferrer" aria-label="ma page github" title="Rejoins moi sur github"><i class="fab fa-fw fa-github"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/laurentSavarit" target="_blank" rel="noreferrer" aria-label="ma page twitter" title="Rejoins moi sur twitter"><i class="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/laurentSavaritDev" target="_blank" rel="noreferrer" aria-label="ma page linkedin" title="Rejoins moi sur linkedin"><i class="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                    <!-- Footer About Text-->
                    <div class="col-lg-4">
                        <h2 class="text-uppercase mb-4">Informations</h2>
                        <p class="lead mb-0">
                            <NuxtLink to="/plan" title="accéder au plan du site">Plan du site</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>

        </footer>
        <div class="copyright py-4 text-center text-white">
          <div class="container"><small>Copyright &copy; Laurent Savarit 2021</small></div>
        </div>
</div>
</template>

<script>
export default {
  name:"Footer"
}
</script>
