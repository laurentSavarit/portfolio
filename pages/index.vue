<template>

   <div id="page-top">

        <Nav/>
        <Header/>
        <Portfolio/>
        <Journey/>
        <Contact/>
        <Footer/>
        <Modal/>
    </div>

</template>

<script>
import Contact from '../components/contact.vue';
import Footer from '../components/footer.vue';
import Header from '../components/header.vue';
import Journey from "../components/journey.vue";
import Modal from '../components/modal.vue';
import Nav from '../components/nav.vue';
import Portfolio from '../components/portfolio.vue';

export default {
  name: "app",
  components:{
    Journey,
    Portfolio,
    Nav,
    Header,
    Contact,
    Footer,
    Modal
  }
}

</script>


