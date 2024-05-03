<template>
  <card>
    <div class="author">
      <!-- Columna Sección -->
      <div class="block">
        <span>Turno</span>
        <p class="card-text">
          {{ controlPlantaHeader.turno.nombre }}
        </p>
      </div>
      <!-- Columna Máquina -->
      <div class="block">
        <span>Referencia</span>
        <p class="card-text">
          {{ controlPlantaHeader.referencia }}
        </p>
      </div>
      <div class="block">
        <span>Talla</span>
        <p class="card-text">
          {{ controlPlantaHeader.talla }}
        </p>
      </div>
      <div class="block">
        <span>Lote</span>
        <p class="card-text">
          {{ controlPlantaHeader.lote }}
        </p>
      </div>
      <div class="block">
        <span>Cantidad</span>
        <p class="card-text">
          {{ controlPlantaHeader.cantidadProducida }}
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
  /* Eliminamos las propiedades de flexbox para que sea en bloque */
}
.block {
  text-align: left; /* Centra el texto dentro de cada bloque */
  margin-bottom: 10px; /* Espacio entre bloques */
}
</style>