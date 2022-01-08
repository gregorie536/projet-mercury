<template>
  <div class="livre">
    <NavBar />
    <section class="white">
      <div class="titre">
        <h1 class="title">{{ titre }}</h1>
      </div>
      <div>
        <h2 class="lineHeight">{{ titre2 }}</h2>
      </div>
      <div class="container">
        <img :src="livre.url" :alt="livre.alt" />
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
  name: "Goodies",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      titre: "les figures de l'ombre",
      titre2: "Le livre",
      livre: {
        url: require("@/assets/img/livre/auteur.webp"),
        alt: "Livre de l'auteur",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 50px;
}

.lineHeight {
  line-height: 0;
  font-size: 40px;
  color: #e58802;
  opacity: 0.5;
}

.livre {
  background: url(../assets/img/film/fondFilm.webp) no-repeat center center;
  background-color: #1c1c1c;
}

.GFooter {
  margin: 50px;
}
</style>
