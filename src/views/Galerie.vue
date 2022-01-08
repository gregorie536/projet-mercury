<template>
  <div class="galerie">
    <NavBar />
    <section class="white">
      <div class="titre">
        <h1 class="title">{{ titre }}</h1>
      </div>
    </section>
    <section class="ring">
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-1"
            @click="openModal(img1.url, img1.alt)"
            :src="img1.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-2"
            @click="openModal(img2.url, img2.alt)"
            :src="img2.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-3"
            @click="openModal(img3.url, img3.alt)"
            :src="img3.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
    </section>
    <section class="ring">
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-4"
            @click="openModal(img4.url, img4.alt)"
            :src="img4.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-5"
            @click="openModal(img5.url, img5.alt)"
            :src="img5.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-6"
            @click="openModal(img6.url, img6.alt)"
            :src="img6.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
    </section>
    <section class="ring">
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-7"
            @click="openModal(img7.url, img7.alt)"
            :src="img7.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-8"
            @click="openModal(img8.url, img8.alt)"
            :src="img8.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-9"
            @click="openModal(img9.url, img9.alt)"
            :src="img9.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
    </section>
    <section class="ring">
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-10"
            @click="openModal(img10.url, img10.alt)"
            :src="img10.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-11"
            @click="openModal(img11.url, img11.alt)"
            :src="img11.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
      <article>
        <div class="overlay-image">
          <img
            class="image_hover-12"
            @click="openModal(img12.url, img12.alt)"
            :src="img12.url"
          />
          <div class="hover">
            <div class="text"></div>
          </div>
        </div>
      </article>
    </section>
    <Modal
      :imgUrl="modalImg"
      :imgAlt="modalAlt"
      v-show="modalIsOpened"
      @close="closeModal"
    ></Modal>
  </div>
  <div class="GFooter">
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/Modal";
export default {
  name: "Galerie",
  components: {
    NavBar,
    Footer,
    Modal,
  },
  methods: {
    closeModal() {
      this.modalIsOpened = false;
    },
    openModal(img, alt) {
      this.modalIsOpened = true;
      this.modalImg = img;
      this.modalAlt = alt;
    },
  },

  data() {
    return {
      modalIsOpened: false,
      modalImg: "",
      modalAlt: "",
      titre: "Galerie",
      img1: {
        url: require("@/assets/img/galerie/im1.webp"),
      },
      img2: {
        url: require("@/assets/img/galerie/image7.webp"),
      },
      img3: {
        url: require("@/assets/img/galerie/image6.webp"),
      },
      img4: {
        url: require("@/assets/img/galerie/image8.webp"),
      },
      img5: {
        url: require("@/assets/img/galerie/img2.webp"),
      },
      img6: {
        url: require("@/assets/img/galerie/image4.webp"),
      },
      img7: {
        url: require("@/assets/img/galerie/image5.webp"),
      },
      img8: {
        url: require("@/assets/img/galerie/image3.webp"),
      },
      img9: {
        url: require("@/assets/img/galerie/lesfiguresdelombre.webp"),
      },
      img10: {
        url: require("@/assets/img/galerie/image3filmetlivre.webp"),
      },
      img11: {
        url: require("@/assets/img/galerie/fondEcranFilm1.webp"),
      },
      img12: {
        url: require("@/assets/img/galerie/fondEcranFilm2.webp"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.overlay-image img:hover {
  cursor: pointer;
}
.ring {
  display: flex;
  justify-content: center;
}
.ring img {
  padding-left: 20px;
}

.galerie {
  background: url(../assets/img/film/fondFilm.webp) no-repeat center center;
  background-color: #1c1c1c;
}

.GFooter {
  margin: 50px;
}

.image_hover-1 {
  width: 150px;
  height: auto;
}
.image_hover-2 {
  width: 150px;
  height: auto;
}
.image_hover-3 {
  width: 150px;
  height: auto;
}
.image_hover-4 {
  width: 150px;
  height: auto;
}
.image_hover-5 {
  width: 150px;
  height: auto;
}
.image_hover-6 {
  width: 150px;
  height: auto;
}
.image_hover-7 {
  width: 150px;
  height: auto;
}
.image_hover-8 {
  width: 150px;
  height: auto;
}
.image_hover-9 {
  width: 150px;
  height: auto;
}
.image_hover-10 {
  width: 150px;
  height: auto;
}
.image_hover-11 {
  width: 150px;
  height: auto;
}
.image_hover-12 {
  width: 150px;
  height: auto;
}

/*========================= RESPONSIVE TABLETTE ======================*/

@media screen and (min-width: 768px) {
  .image_hover-1 {
    width: 300px;
    height: auto;
    // height: 150px;
  }
  .image_hover-2 {
    width: 300px;
    height: auto;
  }
  .image_hover-3 {
    width: 300px;
    height: auto;
  }
  .image_hover-4 {
    width: 300px;
    height: auto;
  }
  .image_hover-5 {
    width: 300px;
    height: auto;
  }
  .image_hover-6 {
    width: 300px;
    height: auto;
  }
  .image_hover-7 {
    width: 300px;
    height: auto;
  }
  .image_hover-8 {
    width: 300px;
    height: auto;
  }
  .image_hover-9 {
    width: 300px;
    height: auto;
  }
  .image_hover-10 {
    width: 300px;
    height: auto;
  }
  .image_hover-11 {
    width: 300px;
    height: auto;
  }
  .image_hover-12 {
    width: 300px;
    height: auto;
  }
}

/*========================= RESPONSIVE DESKTOP ======================*/

@media screen and (min-width: 1024px) {
  .image_hover-1 {
    width: 300px;
    height: auto;
    // height: 150px;
  }
  .image_hover-2 {
    width: 300px;
    height: 180px;
  }
  .image_hover-3 {
    width: 300px;
    height: 180px;
  }
  .image_hover-4 {
    width: 300px;
    height: 180px;
  }
  .image_hover-5 {
    width: 300px;
    height: 180px;
  }
  .image_hover-6 {
    width: 300px;
    height: 180px;
  }
  .image_hover-7 {
    width: 300px;
    height: 180px;
  }
  .image_hover-8 {
    width: 300px;
    height: 180px;
  }
  .image_hover-9 {
    width: 300px;
    height: 180px;
  }
  .image_hover-10 {
    width: 300px;
    height: 180px;
  }
  .image_hover-11 {
    width: 300px;
    height: 180px;
  }
  .image_hover-12 {
    width: 300px;
    height: 180px;
  }
}
</style>