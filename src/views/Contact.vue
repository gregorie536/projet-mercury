<template>
<div class="contact">
  <NavBar />
  <section class="white">
    <div class="titre">
      <h1 class="title">{{ titre }}</h1>
    </div>
    <section>
      <article>
        <p>
          Si vous souhaitez nous adresser un message n'hésitez pas,<br> nous vous répondrons avec plaisir !
        </p>
      </article>
    </section>
    <div class="container">
        <form id="App" 
        @submit="checkForm"
        method="get">
            <p v-if="errors.length">
            <b>Veuillez corriger l'erreur suivante :</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            </p>
            <p>
            <label for="surname">Nom :</label>
            <input name="surname" type="text" v-model="surname" placeholder="Dupont">
            </p>
            <p>
            <label for="firstname">Prénom :</label>
            <input name="firstname" type="text" v-model="firstname" placeholder="Louis">
            </p>
            <p>
            <label for="email">Mail :</label>
            <input name="email" type="email" v-model="email" placeholder="dupont.louis@exemple.com">
            </p>
            <p>
            <label for="story">Message :</label>
            <textarea id="story" name="story"
            rows="5" cols="33" placeholder="250 caratères" v-model="story"></textarea>
            </p>
            <p>
                <input type="submit" value="Envoyer">
            </p>
        </form>
    </div>
  </section>
  </div>
  <div class="GFooter">
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Contact",
  components: {
    NavBar,
    Footer,
  },

  data() {
    return {
      titre: "Formulaire de contact",
      errors: [],
      surname: null,
      firstname: null,
      email: null,
      story: null,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (!this.surname || this.surname.length > 30) {
        this.errors.push(
          "Votre nom ne doit pas être vide et peut contenir 30 caractères"
        );
      }
      if (!this.firstname || this.firstname.length > 30) {
        this.errors.push(
          "Votre prénom ne doit pas être vide et peut contenir 30 caractères"
        );
      }
      var re =
        /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
      if (!this.email || !re.test(this.email)) {
        this.errors.push(
          "Votre email ne doit pas être vide et doit être un email valide"
        );
      }
      if (!this.story || this.story.lenght > 250) {
        this.errors.push(
          "Votre méssage ne doit pas être vide et peut contenir 250 caractères"
        );
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  color: red;
  list-style: none;
  background-color: #1c1c1c;
}

input[type="text"],
textarea,
input[type="email"] {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 0px;
  resize: vertical;
  background-color: #00478f;
  border: none;
  color: white;
}

label {
  margin-right: 0px;
  margin-left: 0px;
  width: 100%;
  color: white;
  font-weight: bold;
}

input[type="submit"] {
  background-color: #e0f0f5;
  color: #00478f;
  text-transform: uppercase;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  border: none;
}

.container {
  box-sizing: border-box;
  border-radius: 5px;
  background-color: transparent;
  padding: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

input {
  text-align: center;
}

textarea {
  border: none;
}

.contact {
  background: url(../assets/img/film/fondFilm.webp) no-repeat center center;
  background-color: #1c1c1c;
}

.GFooter {
  margin: 50px;
}
</style>