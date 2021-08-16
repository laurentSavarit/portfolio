<template>
  <div class="container">
    <main class="content">
      <section class="content_left">
        <header class="header">
          <h1 class="header_title">Laurent Savarit<span class="title_job">Développeur Web fullstack JS</span></h1>
          <nav class="header_nav">
            <ul class="nav_list">
              <li class="nav_list_item"><a href="#">un lien</a></li>
              <li class="nav_list_item"><a href="#">un lien</a></li>
              <li class="nav_list_item"><a href="#">un lien</a></li>
            </ul>
          </nav>
        </header>
        <article class="content_left_article">l'article</article>
      </section>
      <section class="content_right">le contenu</section>
    </main>
    <footer class="footer">
      <p class="footer_content">www.laurentsavarit.fr©</p>
    </footer>
  </div>
</template>

<script>
//on importe notre reset CSS
import "../static/css/reset.css";

export default {};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body{
  font-family:"Roboto", sans-serif;
}

/*
  Version mobile
*/
@media screen and (max-width: 640px) {
  body {
    background: black;
    min-width: 300px;
  }

  .container {
    display: flex;
    flex-direction: column;
    background: grey;
    width: 100%;
    margin: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .content_left {
    width: 100%;
  }

  .header {
    background: yellow;
  }

  .content_left_article {
    background: red;
  }

  .content_right {
    width: 100%;
    background: green;
  }

  .footer {
    background: blue;
    width: 100%;
  }
}





/*
  Version desktop
*/
@media screen and (min-width: 641px) {
  body {
    background: black;
  }

  .container {
    display: flex;
    flex-direction: column;
    background: whitesmoke;
    width: 90%;
    margin: 2em auto;
  }

  .content {
    display: flex;
    width: 100%;
  }

  .content_left {
    width: 50%;
  }

  .header {
    background: yellow;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
  }

  .header_title{
    font-weight:700;
    font-size: 2em;
    width: 40%;
    text-align: center;
  }

  .title_job{
    display:block;
    width: 100%;
    font-size:1rem;
    font-weight: 400;
    text-align:center;
  }


  .header_nav{
    width: 60%;
  }
  .nav_list{
    display:flex;
    justify-content: space-around;
    width: 100%;
  }






  .content_left_article {
    height:80vh;
    background: url("../static/img/background.png");
    background-repeat: no-repeat;
    background-size:contain;
    background-position: center;

  }

  .content_right {
    width: 50%;
  }

  .footer {
    background: blue;
    width: 100%;
    padding: 1em;
    text-align:center;
    font-size:1em;
    box-sizing: border-box;
  }
}
</style>
