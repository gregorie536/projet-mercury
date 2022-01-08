<template>
  <div id="#app">
  <div class="container">
    <router-view />
  </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "CalibriBold";
  src: local("CalibriBold"),
    url("./assets/fonts/CalibriBold.TTF") format("truetype");
}
@font-face {
  font-family: "CalibriLight";
  src: local("CalibriLight"),
    url("./assets/fonts/CalibriLight.ttf") format("truetype");
}

/****************************************************
                      VARIABLES COULEURS
*****************************************************/
:root {
  --couleur-gris: #808080;
  --couleur-red: #ff0000;
  --couleur-black: #000000;
  --couleur-aliceblue: #f0f8ff;
  --couleur-burlywood: #deb887;
  --couleur-turquoise: #339989;
  --couleur-white: #ffffff;
  --couleur-facebook: #4267b2;
  --couleur-twiter: #1da1f2;
  --couleur-bistre: #3d2b1f;
  --couleur-vert-fonce: #132e37;
  --couleur-vert-clair: #265e6e;
  --couleur-gris-clair: #708090;
  --couleur-gris-fonce: #696969;
  --couleur-dore: #dac580;
  --cyan-bleu: #2c3e50;
  --gris: var(--couleur-gris);
  --red: var(--couleur-red);
  --black: var(--couleur-black);
  --aliceblue: var(--couleur-aliceblue);
  --burlywood: var(--couleur-burlywood);
  --turquoise: var(--couleur-turquoise);
  --white: var(--couleur-white);
  --facebook: var(--couleur-facebook);
  --twiter: var(--couleur-twiter);
  --bistre: var(--couleur-bistre);
  --vert-fonce: var(--couleur-vert-fonce);
  --vert-clair: var(--couleur-vert-clair);
  --gris-clair: var(--couleur-gris-clair);
  --gris-fonce: var(--couleur-gris-fonce);
  --dore: var(--couleur-dore);
  --cb: var(--cyan-bleu);
  //
  --bleu-Fonce: #00478f;
  --bleu-Claire: #e0f0f5;
  --Noir: #000000;
  --Orange: #e7d488;
  --bleuFonce: var(--bleu-Fonce);
  --bleuClaire: var(--bleu-Claire);
  --noir: var(--Noir);
  --orange: var(--Orange);
}

/****************************************************
                      GLOBAL
*****************************************************/
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  background-color: #1c1c1c;
  max-width: 100%;
  margin: 0 0 0 0;
}

img {
  max-width: 100%;
}

body {
  font-size: 1.6rem;
  line-height: 1.2;
  font-family: "CalibriLight";
  max-width: 100%;

}

#app {
  font-family: "CalibriLight";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--cb);
  background-color: #1c1c1c;
  max-width: 100%;
  h1 {
    font-size: 40px;
  }
  a {
    text-decoration: none;
    color: var(--cb);
    &:hover {
      color: var(--black);
    }
  }
  li {
    list-style: none;
  }
  h1,
  h2 {
    font-family: "CalibriBold";
  }
}



.white {
  h2,
  p {
    color: white;
  }
}

.title {
  color: #e58802;
  opacity: 0.5;
  text-transform: uppercase;
}
/****************************************************
                      FOOTER
*****************************************************/

.titre {
  display: flex;
  justify-content: center;
}
</style>
