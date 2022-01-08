<template>
  <div class="footer">
    <footer>
      <div class="reseau">
        <router-link to="/MentionsLegales">Mentions légales</router-link>
        <div class="rs">
          <a href="https://www.instagram.com/?hl=fr" target="_blank">
            <img :src="instagram.url" :alt="instagram.alt" />
          </a>
          <a href="https://fr-fr.facebook.com/" target="_blank">
            <img :src="facebook.url" :alt="facebook.url" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      instagram: {
        url: require("@/assets/img/logo/instagram.webp"),
        alt: "Logo Instagram",
      },
      facebook: {
        url: require("@/assets/img/logo/facebook.svg"),
        alt: "Logo Facebook",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
footer .reseau {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.reseau a {
  color: white !important;
}

.rs {
  text-align: end;
  img {
    padding-left: 10px;
    padding-right: 10px;
    width: 60px;
  }
}
</style>