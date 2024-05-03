<template>
  <card>
    <div class="author">
      <!-- Columna Sección -->
      <div class="block">
        <span class="label">Tejedor:</span>
        <p class="card-text">
          {{ controlPlantaHeader.tejido }}
        </p>
      </div>

      <div class="block">
        <span class="label">Técnico APC:</span>
        <p class="card-text">
          {{ controlPlantaHeader.tecnicaAPC }}
        </p>
      </div>

      <div class="block">
        <span class="label">Calidad Pié de Máquina:</span>
        <p class="card-text">
          {{ controlPlantaHeader.calibrePiezaMaquina }}
        </p>
      </div>

      <div class="block">
        <span class="label">Técnico Montaje:</span>
        <p class="card-text">
          {{ controlPlantaHeader.tecnicoMonitor }}
        </p>
      </div>

      <div class="block">
        <span class="label">Personal de Calidad:</span>
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
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos dentro del bloque */
  text-align: left;
  margin-bottom: 10px;
}
.label {
  /* font-weight: bold; */
  margin-right: 10px; /* Espacio entre la etiqueta y el texto */
}
.card-text {
  margin: 0; /* Elimina márgenes predeterminados para ajustar el alineamiento */
}
</style>