<template>

   <div id="page-top">

        <Nav/>
        <Contact/>
        <Footer/>
    </div>

</template>

<script>
import Contact from '../components/contact.vue';
import Footer from '../components/footer.vue';
import Nav from '../components/nav.vue';


export default {
  name: "contact",
  components:{
    Nav,
    Footer,
    Contact
  },

  data(){
    return{
      title:"contact"
    }
  },

  head(){
    return{
      title: document.title +"-"+ this.title
    }
  }
}

</script>
