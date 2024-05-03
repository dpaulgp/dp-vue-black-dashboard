<template>
  <card>
    <p class="card-text"></p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <!-- <a href="#">
        <img class="avatar" src="img/anime6.png" alt="..." />
        <h5 class="title">{{ controlPlantaHeader.id }}</h5>
      </a> -->
      <span slot="header">
    Sección
  </span>
  <p class="card-text">
        {{ controlPlantaHeader.maquina.seccion.nombre }}
      </p>
      <span slot="header">
    Máquina
  </span>
  <p class="card-text">
        {{ controlPlantaHeader.maquina.nombre }}
      </p>
      <span slot="header">
    Fecha
  </span>
  <p class="card-text">
        date of today
      </p>

    </div>
    
    <p></p>
    <!-- <p class="card-description">
      {{ user.description }}
    </p> -->
    <!-- <div slot="footer" class="button-container">
      <base-button icon round class="btn-facebook">
        <i class="fab fa-facebook"></i>
      </base-button>
      <base-button icon round class="btn-twitter">
        <i class="fab fa-twitter"></i>
      </base-button>
      <base-button icon round class="btn-google">
        <i class="fab fa-google-plus"></i>
      </base-button>
    </div> -->
  </card>
</template>
<script>
export default {
  props: {
    controlPlantaHeader: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style></style>
