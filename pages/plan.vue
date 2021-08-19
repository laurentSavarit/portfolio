<template>

   <div id="page-top">

        <Nav/>
        <main class="masthead bg-secondary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <!-- Masthead Heading-->
                <h1 class="masthead-heading text-uppercase mb-0">Plan du site</h1>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-chevron-down"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <ul class="list-group">
                  <li class="list-group-item"><a href="/">Accueil</a></li>
                  <li class="list-group-item"><a href="/portfolio">Portfolio</a></li>
                  <li class="list-group-item"><a href="/parcours">Parcours</a></li>
                  <li class="list-group-item"><a href="/contact">Contact</a></li>
                  <li class="list-group-item"><a href="/plan">Plan du site</a></li>
                </ul>

            </div>
        </main>
        <Footer/>
    </div>

</template>

<script>

import Footer from '../components/footer.vue';
import Nav from '../components/nav.vue';


export default {
  name: "plan",
  components:{
    Nav,
    Footer,
  },

  data(){
    return{
      title:"plan du site"
    }
  },

  head(){
    return{
      title: document.title +"-"+ this.title
    }
  }
}

</script>


