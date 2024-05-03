<template>
  <card>
    <div class="author">
      <div class="block">
        <span class="label">Turno:</span>
        <p class="card-text">{{ controlPlantaHeader.turno.nombre }}</p>
      </div>
      <div class="block">
        <span class="label">Referencia:</span>
        <p class="card-text">{{ controlPlantaHeader.referencia }}</p>
      </div>
      <div class="block">
        <span class="label">Talla:</span>
        <p class="card-text">{{ controlPlantaHeader.talla }}</p>
      </div>
      <div class="block">
        <span class="label">Lote:</span>
        <p class="card-text">{{ controlPlantaHeader.lote }}</p>
      </div>
      <div class="block">
        <span class="label">Cantidad:</span>
        <p class="card-text">{{ controlPlantaHeader.cantidadProducida }}</p>
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
  /* Eliminamos las propiedades de flexbox para que sea en bloque */
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