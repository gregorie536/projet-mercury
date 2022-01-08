<template>
  <div class="mentionsLegales">
    <NavBar />
    <section class="white">
      <div class="titre">
        <h1 class="title">{{ titre }}</h1>
      </div>
      <div class="container">
        <article>
          <h2>Editeur du site Web</h2>
          <p>Gabin Baudrillart</p>
          <p>Simon Givry</p>
          <p>Barbara Perennez</p>
          <p>Grégorie Vexier</p>
          <p>Bruz 35170</p>
          <p>Téléphone : 02 57 24 04 15</p>
          <h2>Hébergement du site Web</h2>
          <p>
            o2switch Siret : 510 909 807 00024 RCS Clermont Ferrand SARL au
            capital de 100 000€ Opérateur Télécom déclaré ARCEP 09/2989 -
            AS50474 o2switch est une société du groupe Zohey SAS au capital de 8
            000 000€ Marque déposée INPI : 09 3 645 279 L'ensemble des éléments
            visuels et textuels de ce site fait l'objet d'un dépôt INPI-Soleau
          </p>
          <h2>Crédits</h2>
          <p>
            Responsable éditorial : Barbara Perennez<br />
            Technologies utilisées : Vue.js<br />
            Conception et réalisation du site : Grégorie Vexier<br />
            Réalisations graphiques : Gabin Baudrillart, Simon Givry
          </p>
          <h2>Propriété et reproduction</h2>
          <p>
            La structure générale, ainsi que les logiciels, textes, images
            animées ou fixes, sons, savoir-faire, dessins, graphismes et tous
            autres éléments composant ce site web sont de l’utilisation
            exclusive de mercury.overflow-hidden.fr. Toute reproduction totale
            ou partielle de ce site, par quelques procédés que ce soient, sans
            autorisation expresse de mercury.overflow-hidden.fr, est interdite
            et constituerait une contrefaçon sanctionnée par les articles L335-2
            et suivants du Code de la propriété intellectuelle. Les liens
            hypertextes mis en place dans le cadre du présent site web en
            direction d’autres ressources présentes sur le réseau internet, ne
            sauraient engager la responsabilité de mercury.overflow-hidden.fr.
          </p>
          <h2>Données personnelles</h2>
          <p>
            Aucune information personnelle n’est collectée à votre insu ni cédée
            à des tiers. Vous disposez d’un droit d’accès, de rectification et
            d’opposition aux données vous concernant que vous pouvez exercer en
            envoyant un courrier électronique à mercury.overflow-hidden.fr.
          </p>
          <h2>Liens</h2>
          <p>
            mercury.overflow-hidden.fr autorise la mise en place d’un lien
            hypertexte pointant vers son contenu, en respectant les principes
            suivants : Le lien pointant vers le site de
            mercury.overflow-hidden.fr soit accessible par l’ouverture d’une
            nouvelle fenêtre/onglet. Le lien est présenté de la manière suivante
            : mercury.overflow-hidden.fr Cette autorisation exclut l’utilisation
            du logo mercury.overflow-hidden.fr.
          </p>
          <h2>Loi applicable</h2>
          <p>
            L’usage de ce site web est régi par la loi française à l’exception
            de toute autre législation.
          </p>
        </article>
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
  name: "MentionsLegales",
  components: {
    NavBar,
    Footer,
  },

  data() {
    return {
      titre: "Mentions Légales",
    };
  },
};
</script>

<style lang="scss" scoped>

.white {
    margin-left: 20px;
    margin-right: 20px;
  }

.mentionsLegales {
  background: url(../assets/img/film/fondFilm.webp) no-repeat center center;
  background-color: #1c1c1c;
}

.GFooter {
  margin: 50px;
}

/*========================= RESPONSIVE TABLETTE ======================*/

@media screen and (min-width: 768px) {
  .container {
    margin: auto;
  }
  .white {
    margin-left: 100px;
    margin-right: 100px;
  }
}
</style>
