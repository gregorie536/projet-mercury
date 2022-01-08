<template>
  <div class="modal-background">
    <div class="modal">
      <span class="close-modal" @click="$emit('close')">X</span>
      <img :src="imgUrl" :alt="imgAlt" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    imgUrl: String,
    imgAlt: String,
  },
};
</script>

<style lang="scss" scoped>
.modal-background {
  display: none;
}
/******************************************************************************/
/*=======================================================
                    MEDIA QUERIES
=========================================================*/
/******************************************************************************/

/*========================= RESPONSIVE TABLETTE ======================*/

@media screen and (min-width: 768px) {
  .modal-background {
    display: block;
  }
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.70);
  }

  .modal {
    height: auto;
    width: auto;
    margin-top: 50vh;
    margin-left: 50%;
    transform: translateY(-50%) translateX(-50%);
    position: relative;
    display: inline-block;
  }

  .close-modal {
    position: absolute;
    top: -20px;
    right: -20px;
    padding-top: 0;
    width: 40px;
    height: 40px;
    background-color: white;
    // border-radius: 1000px;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    margin-top: 60px;
  }

  .close-modal:hover {
    cursor: pointer;
  }

  .modal img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 80vh;
  }
}

/*========================= RESPONSIVE DESKTOP ======================*/

@media screen and (min-width: 1025px) {
}
</style>