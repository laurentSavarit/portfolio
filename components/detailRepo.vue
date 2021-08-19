<template>

        <div class="portfolio-modal modal fade" :id="idRepo" tabindex="-1" :aria-labelledby="idRepo" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{{repo.name}}</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-chevron-down"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4">{{repo.description || "abscence de description"}}</p>
                                    <p class="mb-4">Cloner le dépôt: {{repo.clone_url}}</p>
                                    <a class="btn btn-primary" :href="repo.html_url" target="_blank"><i class="fas fa-link"></i> Accéder au repo sur GitHub</a>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Fermer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name:"DetailRepo",

  props:[
    "idRepo",
    "repo"
  ],

  data(){
    return{
      modalState: false
    }
  }
}
</script>
