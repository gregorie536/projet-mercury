<template>
  <div class="film">
    <NavBar />
    <section class="white">
      <div class="titre">
        <h1 class="title">{{ titre }}</h1>
      </div>
      <div>
        <h2 class="lineHeight">{{ titre2 }}</h2>
      </div>
      <div class="container">
        <div class="orange-text">
          <h2>Synopsis</h2>
          <p class="paragrapheFilm">
            Le destin extraordinaire des trois scientifiques afro-américaines
            qui ont permis aux États-Unis de prendre la tête de la conquête
            spatiale, grâce à la mise en orbite de l’astronaute John Glenn.
            Maintenues dans l’ombre de leurs collègues masculins et dans celle
            d’un pays en proie à de profondes inégalités, leur histoire
            longtemps restée méconnue est enfin portée à l’écran.<br />
            <br />
            Crédits Allociné
          </p>
        </div>
      </div>
      <section class="ring">
        <article v-for="(item, i) in actrice" :key="i">
          <div class="overlay-image">
            <img class="image_hover-1" :src="item.url" :alt="item.alt" />
            <div class="hover">
              <div class="text">
                {{ item.description1 }}<br />
                {{ item.description2 }}
              </div>
            </div>
          </div>
        </article>
      </section>
      <section class="bottom-lite">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/h4aFS2t74oE"
          title="YouTubevideoplayer"
          frameborder="0"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
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
  name: "Film",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      titre: "les figures de l'ombre",
      titre2: "Le film",
      actrice: [
        {
          url: require("@/assets/img/film/janelleManoe.webp"),
          alt: "Janelle Manoe",
          description1: "Janelle Manoe",
          description2: "(Mary W. Jackson)",
        },
        {
          url: require("@/assets/img/film/octaviaSpencer.webp"),
          alt: "Octavia Spencer",
          description1: "Taraji P. Henson",
          description2: "(Katherine Johnson)",
        },
        {
          url: require("@/assets/img/film/tarajiPHenson.webp"),
          alt: "Taraji P. Henson",
          description1: "Octavia Spencer",
          description2: "(Dorothy Vaughan)",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 0;
}

.orange-text {
  border: 1px solid;
  background-color: #e58802;
  opacity: 0.8;
}

.film {
  background: url(../assets/img/film/fondFilm.webp) no-repeat center center;
  background-color: #1c1c1c;
}

.overlay-image {
  position: relative;
}

.overlay-image .text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay-image .hover {
  position: absolute;
  top: 0;
  height: 100%;
  opacity: 0;
  transition-duration: 1.5s;
  background-color: var(--couleur-white);
  width: 100%;
}

.overlay-image:hover .hover {
  opacity: 0.7;
  width: 210px;
  height: 260px;
  border-radius: 900px;
  margin-top: 55px;
  margin-left: 45px;
}

.overlay-image .normal {
  transition-duration: 2s;
}

.bottom-lite iframe {
  margin: auto;
  width: 100%;
}

/*========================= RESPONSIVE TABLETTE ======================*/

@media screen and (min-width: 768px) {
  .overlay-image:hover .hover {
    opacity: 0.7;
    width: 210px;
    height: 260px;
    border-radius: 900px;
    margin-top: 190px;
    margin-left: 340px;
  }
  img {
    max-width: 400px;
  }
}

/*========================= RESPONSIVE DESKTOP ======================*/

@media screen and (min-width: 1025px) {
  .lineHeight {
    line-height: 0;
    font-size: 40px;
    color: #e58802;
    opacity: 0.5;
  }

  .container {
    margin: 200px;
    margin-top: 0;
    margin-bottom: -20px;
  }

  .overlay-image:hover .hover {
    opacity: 0.7;
    width: 210px;
    height: 260px;
    border-radius: 900px;
    margin-top: 75px;
    margin-left: 20px;
  }

  .ring {
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .image_hover-1 {
    width: 250px;
    margin-top: 17%;
  }

  .image_hover-2 {
    width: 250px;
  }

  .image_hover-3 {
    width: 250px;
    margin: 30px;
  }

  img {
    padding: 20px;
  }

  .paragrapheFilm,
  h2 {
    color: white;
  }

  .paragrapheFilm {
    padding: 40px;
  }

  .bottom-lite iframe {
    padding-left: 600px;
    padding-right: 600px;
  }

  .orange-text {
    margin: 100px;
    border: 1px solid;
    background-color: #e58802;
    opacity: 0.8;
  }

  .title {
    line-height: 0;
  }

  .GFooter {
    margin: 50px;
  }
}
</style>
