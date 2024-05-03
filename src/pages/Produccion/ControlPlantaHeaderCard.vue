
<template>
  <card>
    <div class="author" style="display: flex; justify-content: space-between;">
      <!-- Columna Sección -->
      <div class="block" style="flex: 1;">
        <span>Sección</span>
        <p class="card-text">
          {{ controlPlantaHeader.maquina.seccion.nombre }}
        </p>
      </div>
      <!-- Columna Máquina -->
      <div class="block" style="flex: 1;">
        <span>Máquina</span>
        <p class="card-text">
          {{ controlPlantaHeader.maquina.nombre }}
        </p>
      </div>
      <!-- Columna Fecha -->
      <div class="block" style="flex: 1;">
        <span>Fecha</span>
        <p class="card-text">
          {{ fechaHoy }}
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
  computed: {
    fechaHoy() {
      return new Date().toLocaleDateString();
    }
  }
};
</script>
<style scoped>
.author {
  display: flex;
  justify-content: space-between;
}
.block {
  flex: 1;
  text-align: center; /* Centra el texto dentro de cada bloque */
}
</style>
