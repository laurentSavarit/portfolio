<template>

   <div id="page-top">

        <Nav/>
        <Journey/>
        <Footer/>
    </div>

</template>

<script>

import Footer from '../components/footer.vue';
import Journey from '../components/journey.vue';
import Nav from '../components/nav.vue';


export default {
  name: "parcours",
  components:{
    Nav,
    Footer,
    Journey,
  },

  data(){
    return{
      title:"parcours"
    }
  },

  head(){
    return{
      title: document.title +"-"+ this.title
    }
  }
}

</script>
