<template>
  <card>
    <div class="author">
      <!-- Columna Sección -->
      <div class="block">
        <span>Tejedor</span>
        <p class="card-text">
          {{ controlPlantaHeader.tejido }}
        </p>
      </div>

      <div class="block">
        <span>Técnico APC</span>
        <p class="card-text">
          {{ controlPlantaHeader.tecnicaAPC }}
        </p>
      </div>

      <div class="block">
        <span>Calidad Pié de Máquina</span>
        <p class="card-text">
          {{ controlPlantaHeader.calibrePiezaMaquina }}
        </p>
      </div>

      <div class="block">
        <span>Técnico Montaje</span>
        <p class="card-text">
          {{ controlPlantaHeader.tecnicoMonitor }}
        </p>
      </div>

      <div class="block">
        <span>Personal de Calidad</span>
        <p class="card-text">
          {{ controlPlantaHeader.coordinadorCalidad }}
        </p>
      </div>

    </div>
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


<style scoped>
.author {
  /* Cambiado de 'flex' a 'block' para apilar verticalmente */
}
.block {
  text-align: left; /* Centra el texto dentro de cada bloque */
  margin-bottom: 10px; /* Espacio entre bloques */
}
</style>