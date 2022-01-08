<template>
  <div class="goodies">
    <NavBar />
    <section class="white">
      <div class="titre">
        <h1 class="title">{{ titre }}</h1>
      </div>
      <section class="ring">
        <article>
          <div class="overlay-image">
            <img class="image_hover-1" :src="G1.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="description">
            <p>
              Prix : 34.99€<br />
              Composition : 100% coton
            </p>
          </div>
        </article>
        <article>
          <div class="overlay-image">
            <img class="image_hover-2" :src="G2.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="input">
            <p>
              <input type="submit" value="Choisir" />
            </p>
          </div>
        </article>
      </section>
      <div class="border-line"></div>
      <section class="ring">
        <article>
          <div class="overlay-image">
            <img class="image_hover-3" :src="G3.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="description">
            <p>
              Prix : 29.99€<br />
              Composition : 100% coton
            </p>
          </div>
        </article>
        <article>
          <div class="overlay-image">
            <img class="image_hover-4" :src="G4.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="input">
            <p>
              <input type="submit" value="Choisir" />
            </p>
          </div>
        </article>
      </section>
      <div class="border-line"></div>
      <section class="ring">
        <article>
          <div class="overlay-image">
            <img class="image_hover-5" :src="G5.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="description">
            <p>
              Prix : 14.99€<br />
              Composition : 100% coton
            </p>
          </div>
        </article>
        <article>
          <div class="overlay-image">
            <img class="image_hover-6" :src="G6.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="input">
            <p>
              <input type="submit" value="Choisir" />
            </p>
          </div>
        </article>
      </section>
      <div class="border-line"></div>
      <section class="ring">
        <article>
          <div class="overlay-image">
            <img class="image_hover-11" :src="G11.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="descriptiondisplate description">
            <p>
              Prix : 14.99€<br />
              En collaboration avec Displate.
            </p>
          </div>
        </article>
        <article>
          <div class="overlay-image">
            <img class="image_hover-12" :src="G12.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="input">
            <p>
              <input type="submit" value="Choisir" />
            </p>
          </div>
        </article>
      </section>
      <div class="border-line"></div>
      <section class="ring">
        <article>
          <div class="overlay-image">
            <img class="image_hover-7" :src="G7.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="description">
            <p>Prix : 1.99€<br /></p>
          </div>
        </article>
        <article>
          <div class="overlay-image">
            <img class="image_hover-8" :src="G8.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="input">
            <p>
              <input type="submit" value="Choisir" />
            </p>
          </div>
        </article>
      </section>
      <div class="border-line"></div>
      <section class="ring">
        <article>
          <div class="overlay-image">
            <img class="image_hover-9" :src="G9.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="description">
            <p>
              Prix : 5.99€<br />
              Composition : 100% coton
            </p>
          </div>
        </article>
        <article>
          <div class="overlay-image">
            <img class="image_hover-10" :src="G10.url" />
            <div class="hover">
              <div class="text"></div>
            </div>
          </div>
          <div class="input">
            <p>
              <input type="submit" value="Choisir" />
            </p>
          </div>
        </article>
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
  name: "Goodies",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      titre: "Shop",
      G1: {
        url: require("@/assets/img/goodies/G1.webp"),
      },
      G2: {
        url: require("@/assets/img/goodies/G2.webp"),
      },
      G3: {
        url: require("@/assets/img/goodies/G3.webp"),
      },
      G4: {
        url: require("@/assets/img/goodies/G4.webp"),
      },
      G5: {
        url: require("@/assets/img/goodies/G5.webp"),
      },
      G6: {
        url: require("@/assets/img/goodies/G6.webp"),
      },
      G7: {
        url: require("@/assets/img/goodies/G7.webp"),
      },
      G8: {
        url: require("@/assets/img/goodies/G8.webp"),
      },
      G9: {
        url: require("@/assets/img/goodies/G9.webp"),
      },
      G10: {
        url: require("@/assets/img/goodies/G10.webp"),
      },
      G11: {
        url: require("@/assets/img/goodies/G11.webp"),
      },
      G12: {
        url: require("@/assets/img/goodies/G12.webp"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.ring {
  display: flex;
  justify-content: center;
}

.ring img {
  margin-left: 30px;
  margin-right: 30px;
}

.image_hover-1 {
  width: 115px;
}
.image_hover-2 {
  width: 115px;
}
.image_hover-3 {
  width: 115px;
}
.image_hover-4 {
  width: 115px;
}

.image_hover-5 {
  width: 115px;
}

.image_hover-6 {
  width: 115px;
}

.image_hover-7 {
  width: 115px;
}

.image_hover-8 {
  width: 115px;
}

.image_hover-9 {
  width: 115px;
}
.image_hover-10 {
  width: 115px;
}
.image_hover-11 {
  width: 115px;
  padding-top: 100px;
}
.image_hover-12 {
  width: 115px;
}

.border-line {
  border-bottom: 2px solid white;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 80px;
  margin-right: 80px;
}

input[type="submit"] {
  background-color: #e0f0f5;
  color: #e58802;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  border: none;
}

.description {
  display: flex;
  justify-content: flex-start;
}

// .description p {
//   text-align: start;
// }

.descriptiondisplate p {
  padding-top: 200px;
}

input p {
  display: flex;
  justify-content: flex-end;
}

.goodies {
  background: url(../assets/img/film/fondFilm.webp) no-repeat center center;
  background-color: #1c1c1c;
}

.GFooter {
  margin: 50px;
}

/*========================= RESPONSIVE TABLETTE ======================*/

@media screen and (min-width: 768px) {
  .image_hover-1 {
    width: 215px;
  }
  .image_hover-2 {
    width: 215px;
  }
  .image_hover-3 {
    width: 215px;
  }
  .image_hover-4 {
    width: 215px;
  }

  .image_hover-5 {
    width: 215px;
  }

  .image_hover-6 {
    width: 215px;
  }

  .image_hover-7 {
    width: 215px;
  }

  .image_hover-8 {
    width: 215px;
  }

  .image_hover-9 {
    width: 215px;
  }
  .image_hover-10 {
    width: 215px;
  }
  .image_hover-11 {
    width: 215px;
    padding-top: 100px;
  }
  .image_hover-12 {
    width: 215px;
  }
}

/*========================= RESPONSIVE DESKTOP ======================*/

@media screen and (min-width: 1024px) {
  .image_hover-1 {
    width: 315px;
  }
  .image_hover-2 {
    width: 315px;
  }
  .image_hover-3 {
    width: 315px;
  }
  .image_hover-4 {
    width: 315px;
  }
  .image_hover-5 {
    width: 315px;
  }

  .image_hover-6 {
    width: 315px;
  }

  .image_hover-7 {
    width: 315px;
  }

  .image_hover-8 {
    width: 315px;
  }

  .image_hover-9 {
    width: 315px;
  }
  .image_hover-10 {
    width: 315px;
  }
  .image_hover-11 {
    width: 315px;
    padding-top: 190px;
  }
  .image_hover-12 {
    width: 315px;
  }
}
</style>
