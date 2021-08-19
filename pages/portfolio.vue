<template>

   <div id="page-top">

        <Nav/>
        <Portfolio/>
        <Footer/>
    </div>

</template>

<script>

import Footer from '../components/footer.vue';
import Nav from '../components/nav.vue';
import Portfolio from '../components/portfolio.vue';


export default {
  name: "portfolio",
  components:{
    Nav,
    Footer,
    Portfolio,
  },

  data(){
    return{
      title:"portfolio"
    }
  },

  head(){
    return{
      title: document.title +"-"+ this.title
    }
  }
}

</script>
