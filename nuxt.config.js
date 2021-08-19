import dotenv from "dotenv";
dotenv.config();

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio Laurent Savarit',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bienvenue sur le portfolio de Laurent Savarit - Développeur Web Back-end' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href:"https://fonts.googleapis.com/css?family=Montserrat:400,700", rel:"stylesheet", type:"text/css" },
      {href: "https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic", rel: "stylesheet", type:"text/css"}
    ],
    script: [
      {src:"https://use.fontawesome.com/releases/v5.15.3/js/all.js", crossorigin: "anonymous", defer:true},
      {src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js", defer:true}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/styles.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    ["nuxt-mail",{
      message:{
        to:"laurent.savarit@gmail.com",
      },
      smtp:{
        host:"in-v3.mailjet.com",
        port:587,
        auth:{
          user: process.env.USER_MAIL,
          pass: process.env.PASS_MAIL
        }
      }
    }],
    "@nuxtjs/sitemap",
  ],

  sitemap: {
    hostname:"https://www.laurentsavarit.com"
  },

  pwa:{
    icon: false
  },

  env:{
    token: process.env.TOKEN_GITHUB
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
