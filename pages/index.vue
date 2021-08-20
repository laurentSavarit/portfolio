<template>

   <div id="page-top">

        <Nav/>
        <Header/>
        <Footer/>
    </div>

</template>

<script>

import Footer from '../components/footer.vue';
import Header from '../components/header.vue';
import Nav from '../components/nav.vue';


export default {
  name: "app",
  components:{
    Nav,
    Header,
    Footer
  }
}

</script>


