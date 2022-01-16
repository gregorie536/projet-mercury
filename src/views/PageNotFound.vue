<template>
  <div class="notFound">
    <div class="container">
      <section class="error">
        <div class="titre">
          <h1 class="msg404">{{ titre }}</h1>
        </div>
        <article class="white">
          <p>
            Vous avez tenté d’accéder à une page qui ne se trouve pas sur ce
            site. Veuillez revenir sur la page d'accueil afin de continuer votre
            navigation sur notre site.
          </p>
        </article>
        <!-- <article class="page-404"> -->
          <!-- <div class="img-error">
            <router-link to="/">
              <img :src="imgError.url" alt="" />
            </router-link>
          </div> -->
          <router-link to="/">
          <div class="video-error">
            <video
              id="videoBG"
              poster="img/poster.jpg"
              preload="auto"
              autoplay=""
              muted=""
              loop=""
              playsinline=""
              width="1920"
              height="880"
            >
              <source src="../assets/img/notFound/mz.mp4" type="video/mp4" />
            </video>
            
          </div>
          </router-link>
          <!-- <video width="720" height="740" controls poster="vignette.jpg">
            <source src="../assets/img/notFound/mz.mp4" type="video/mp4" />
          </video> -->
        <!-- </article> -->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      titre: "Oups !",
      imgError: {
        url: require("@/assets/img/notFound/page404.webp"),
      },
    };
  },
};
</script>


<style lang="scss" scoped>
h1 {
  font-size: 40px;
  text-align: center;
}

p {
  text-align: center;
}

.img-error {
  display: flex;
  justify-content: center;
  max-width: 600px;
}

.page-404 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.video-error source {
  width: 100%;
}

.msg404 {
  color: #e58802;
}

.logo404 {
  margin-bottom: 300px;
}

.notFound {
  background-color: black;
}
</style>