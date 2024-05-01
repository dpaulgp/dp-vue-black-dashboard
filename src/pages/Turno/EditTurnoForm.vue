<template>
<card>
  <h5 slot="header" class="title">Editar Turno</h5>
  <div class="row">
    <div class="col-md-4 pr-md-1">
      <base-input
        label="Nombre"
        placeholder="Nombre"
        v-model="turno.nombre"
      >
      </base-input>
    </div>
  </div>
  <div class="row">

    <div class="col-md-6 pr-md-1">
      <base-input
        label="Inicio"
        type="time"
        v-model="turno.inicio"
      ></base-input>
    </div>
    <div class="col-md-6 pl-md-1">
      <base-input
        label="Fin"
        type="time"
        v-model="turno.fin"
      ></base-input>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <base-input
        label="Estado"
        v-model="turno.estado"
        placeholder="Estado actual del turno"
      ></base-input>
    </div>
  </div>
          

  <div class="row">
  <div class="col-md-4">
    <label for="estado">Estado</label>
    <select class="form-control" id="estado" v-model="turno.estado">
      <option v-for="estado in estados" :key="estado" :value="estado">{{ estado }}</option>
    </select>
  </div>
</div>
  <base-button slot="footer" type="primary" fill @click="saveChanges">Guardar Cambios</base-button>
</card>
</template>


<script>
export default {
props: {
  turno: {
    type: Object,
    required: true
  }
},
data() {
    return {
      estados: ["Activo", "Inactivo"],
    };
  },
methods: {
  // editTurno(id) {
  //   this.$router.push({ name: 'editTurno', params: { id } });
  // },
  // saveChanges() {
  //   // Emitir un evento para actualizar los datos en el componente padre
  //   this.$emit('update:model', this.localModel);
  // },

  saveChanges(turno) {
    fetch('http://localhost:8800/api/createTurno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(turno),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  
}
};
</script>

<!-- 
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
</script> -->
