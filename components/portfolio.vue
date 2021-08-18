<template>
  <!-- Portfolio Section-->
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <!-- Portfolio Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Mon Portfolio</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-chevron-down"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Grid Items-->
                <div class="row justify-content-center">
                    <!-- Portfolio Item 1-->
                    <div class="col-md-6 col-lg-4 mb-5" v-for="repo in repos" :key="repo.id">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <figure class="figure-portfolio">
                                  <img :src="getLanguageLogo(repo.language)" alt="logo github">
                                  <figcaption><h4>{{repo.name}}</h4></figcaption>
                                  </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>

import token from "../token";

export default {

  name:"Portfolio",

  data(){
    return{
      repos:[],
    }

  },

  async mounted() {

    const request = await fetch("https://api.github.com/user/repos?type=owner",{
      headers:{
        "Accept":"application/vnd.github.v3+json",
        "Authorization":`token ${token}`

      }
    })

  const allRepos = await request.json();
  this.$data.repos = [...allRepos];

  console.log(this.$data.repos)

  },

  methods:{
    getLanguageLogo(language){

      console.log(language);
      if(!language){
        return require("~/assets/img/github.png");
      };

      return require('~/assets/img/'+language.toLowerCase()+".png");
    }
  }

}
</script>

<style scoped>
  .figure-portfolio{
    width: 100%;
  }

  .figure-portfolio img{
    display:block;
    width: 200px;
    margin:auto;
  }

  .figure-portfolio figcaption{
    text-align:center;
    font-size: 2em;
    margin:1em;
    font-weight:700;
    color: #2C3E50;
  }

</style>
