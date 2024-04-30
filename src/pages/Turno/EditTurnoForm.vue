<template>
  <card>
    <h5 slot="header" class="title">Editar Turno</h5>
    <div class="row">
      <div class="col-md-3 px-md-1">
        <base-input
          label="Nombre"
          placeholder="Nombre"
          v-model="localModel.nombre"
        >
        </base-input>
      </div>
      <div class="col-md-6 pr-md-1">
        <base-input
          label="Inicio"
          type="datetime-local"
          v-model="localModel.inicio"
        ></base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input
          label="Fin"
          type="datetime-local"
          v-model="localModel.fin"
        ></base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input
          label="Estado"
          v-model="localModel.estado"
          placeholder="Estado actual del turno"
        ></base-input>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill @click="saveChanges">Guardar Cambios</base-button>
  </card>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      localModel: JSON.parse(JSON.stringify(this.model))
    };
  },
  methods: {
    saveChanges() {
      // Emitir un evento para actualizar los datos en el componente padre
      this.$emit('update:model', this.localModel);
    }
  }
};
</script>
