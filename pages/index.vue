<template>
  <div class="container">
    <main class="content">
      <section class="content_left">
        <header class="header">
          <h1 class="header_title">Laurent Savarit<span class="title_job">Développeur Web fullstack JS</span></h1>
          <nav class="header_nav">
            <ul class="nav_list">
              <li class="nav_list_item"><a href="#">Mon parcours</a></li>
              <li class="nav_list_item"><a href="#">Mes réalisations</a></li>
              <li class="nav_list_item"><a href="#">Me contacter</a></li>
            </ul>
          </nav>
        </header>
        <div class="content_left_article">
          <article class="article">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo, tempora unde error exercitationem excepturi corrupti saepe adipisci dolorem facilis fuga, in sequi eum tenetur animi obcaecati, beatae nam fugit?
            </p>
          </article>
        </div>
      </section>
      <section class="content_right">
        <div class="component"></div>
      </section>
    </main>
    <footer class="footer">
      <p class="footer_content">plan du site</p>
    </footer>
    <div class="arrow-bottom"></div>
    <div class="arrow-up"></div>
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
@media screen and (max-width: 1023px) {
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
@media screen and (min-width: 1024px) {
  body {
    background: white;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 2em auto;
  }

  .content {
    display: flex;
    width: 100%;
  }

  .content_left {
    width: 50%;
    display:flex;
    flex-direction: column;
    background: url("../static/img/pc.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 0;
    height:10%;
  }

  .header_title{
    z-index:10;
    font-weight:700;
    font-size: 2.25em;
    width: 35%;
    text-align: center;
    color:white;
    text-shadow: 2px 2px 1px black;
  }

  .title_job{
    display:block;
    width: 100%;
    font-size:1.125rem;
    font-weight: 400;
    text-align:center;
  }

  .content_left_article{
    height:90%;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }

  .article{
    align-self: center;
    width:30vw;
    margin:15vh auto;
    padding: 1em;
    background: rgba(0, 0, 0, .5);
    box-shadow: 2px 2px 4px black;
    backdrop-filter: blur(3px)
  }

  .article p{
    color:white;
    text-shadow: 1px 1px 1px black;
    font-size:1.5em;
  }

  .header_nav{
    width: 65%;
    z-index:10;
  }
  .nav_list{
    display:flex;
    justify-content: space-around;
    width: 100%;
    color:white;
    font-size:1.25em;
  }
  .nav_list_item{
    text-shadow: 2px 2px 1px black;
    transition: transform .5s;
  }

  .nav_list_item:hover{
    transform: scale(1.1);
  }

  .nav_list a{
    transition: color .5s;
  }

  .nav_list a:hover{
    color:black;
    text-decoration: underline;
    text-shadow: none;
  }

  .nav_list a:visited{
    color:white;
  }

   .nav_list a:visited:hover{
    color:black;
    text-decoration: underline;
    text-shadow: none;
  }

  .content_left_article {
    width: 100%;
  }

  .content_right {
    z-index:2;
    width: 50%;
    height:90vh;
    background: url("../static/img/background.png");
    background-repeat: no-repeat;
    background-size:contain;
    background-position: center;
    filter: drop-shadow(3px 2px 1px black);
  }



  .footer_content{
    text-align:center;
    font-size:1rem;
    font-weight:700;
    padding: .5em;
    box-sizing: border-box;
  }

  .arrow-bottom {
      position:fixed;
      top:2em;
      display : inline-block;
      height : 0;
      width : 0;
      border-right : 80vw solid transparent;
      border-top : 20vh solid #1f77bd;
      filter: drop-shadow(3px 3px 1px black);
    }
  /*.arrow-up{
     position:fixed;
     bottom:1em;
     display : inline-block;
     height : 0;
     width : 0;
     border-top : 95vh solid transparent;
     border-left : 15vh solid #91C346;
     filter: drop-shadow(3px 1px 1px black);

  }*/
}
</style>
