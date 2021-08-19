<template>
  <section class="page-section" id="contact">
    <div class="container">
      <!-- Contact Section Heading-->
      <h2
        class="
          page-section-heading
          text-center text-uppercase text-secondary
          mb-0
          my-4
        "
      >
        Me contacter
      </h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-7">
          <form id="contactForm" @submit.prevent="onSubmitFormContact">
            <!-- Name input-->
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="name"
                name="name"
                v-model="name"
                @input="onChange"
                type="text"
                placeholder="Entrer votre nom et prénom"
              />
              <label for="name">Nom et prénom</label>
            </div>
            <!-- Email address input-->
            <div class="form-floating mb-3">
              <input
                class="form-control"
                v-model="email"
                name="email"
                @input="onChange"
                id="email"
                type="email"
                placeholder="name@example.com"
              />
              <label for="email">Votre adresse mail</label>
            </div>
            <!-- Phone number input-->
            <div class="form-floating mb-3">
              <input
                class="form-control"
                v-model="phone"
                name="phone"
                @input="onChange"
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
              />
              <label for="phone">Numéro de téléphone</label>
            </div>
            <!-- Message input-->
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                name="message"
                v-model="message"
                @input="onChange"
                id="message"
                type="text"
                placeholder="Votre message...."
                style="height: 10rem"
              ></textarea>
              <label for="message">Message</label>
            </div>

            <!-- Submit Button-->
            <button
              class="btn btn-primary btn-xl"
              id="submitButton"
              type="submit"
            >
              Envoyer
            </button>
            <span class="text-danger mx-4">{{ info }}</span>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "contact",

  data() {
    return {
      info: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      valid: false,
    };
  },
  methods: {
    onChange(event) {
      const input = event.target;
      switch (input.name) {
        case "name":
        case "phone":
        case "message":
          if (this[input.name] === "") {
            input.style.border = "1px solid red";
          } else {
            input.style.border = "none";
            this.valid = true;
          }
          break;
        case "email":
          const regexpEmail = new RegExp(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          );
          const checkEmail = regexpEmail.test(this[input.name]);
          if (!checkEmail) {
            input.style.border = "1px solid red";
          } else {
            input.style.border = "none";
            this.valid = true;
          }
          break;
        default:
          return;
      }
    },
    async onSubmitFormContact(event) {
      try {
        if (this.valid) {
          const send = await this.$mail.send({
            from: "laurent.savarit@gmail.com",
            subject: `Tu as reçu un mail de ${this.$data.name} - tel: ${this.$data.phone}`,
            text: `
                expediteur: ${this.$data.email}<br/>
                message:<br/>${this.$data.message}`,
          });

          if (send) {
            this.$data.info = "message envoyé";
          } else {
            this.$data.info = "Il y a eu une erreur...";
          }
          event.target.reset();
        } else {
          this.$data.info = "Le formulaire n'est pas complet...";
        }
        setTimeout(()=>this.$data.info="",3000)
      } catch (err) {
        this.$data.info = "Il y a eu une erreur...";
      }
    },
  },
};
</script>
