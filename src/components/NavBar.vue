<template>
  <nav id="sidemenu" class="navigation" role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>
      <div class="leLogo">
        <div class="logo">
          <router-link to="/"
            ><img :src="logoHeader.url" :alt="logoHeader.alt"
          /></router-link>
        </div>
      </div>

      <ul id="menu">
        <li>
          <router-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="/Film">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-camera-reels-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              <path
                d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="/Livre">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-book-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="/Goodies">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="/Galerie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-image-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="/Contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
              />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      logoHeader: {
        url: require("@/assets/img/logo/logo.svg"),
        alt: "logo",
      },
    };
  },
  methods: {
    sidemenu: {
      el: "#sidemenu",
      data: {
        navOpen: false,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#menuToggle {
  display: block;
  position: relative;
  margin-left: 40px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: #00478f;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #cdcdcd;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 100px;
  margin: -100px 0 0 -60px;
  padding: 50px;
  padding-top: 125px;
  background: #ffffff;
  opacity: 0.9;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
  height: 100px;
  text-align: center;
}

#menuToggle input:checked ~ ul {
  transform: none;
}

img {
  max-width: 10%;
}

.navigation {
  padding-top: 30px;
}

.leLogo {
  text-align: end;
  padding-right: 70px;
  padding-top: 0;
}

/*========================= RESPONSIVE DESKTOP ======================*/

@media screen and (min-width: 1025px) {
  .leLogo {
    text-align: end;
    padding-right: 30px;
    padding-top: 0;
  }
}
</style>
