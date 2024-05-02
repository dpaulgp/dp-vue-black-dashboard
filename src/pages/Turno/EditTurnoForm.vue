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
    <label for="estado">Estado</label>
    <select class="form-control" id="estado" v-model="turno.estado">
      <option v-for="estado in estados" :key="estado" :value="estado">{{ estado }}</option>
    </select>
  </div>
</div>
  <base-button slot="footer" type="primary" fill @click="saveChanges">Guardar Cambios</base-button>
  <base-button slot="footer" type="primary" fill @click="cancel">Cancel</base-button>

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
      estados: ["Activo", "Inactivo"]
    };
  },
  methods: {
    saveChanges() {

      const token = localStorage.getItem('token');  
      const headers = new Headers({
    'Authorization': 'Bearer ' + token,  // Use Bearer authentication scheme
    'Content-Type': 'application/json'
  });
      console.log(this.turno);

      fetch('http://localhost:8800/api/createTurno', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(this.turno),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text().then(text => text ? JSON.parse(text) : {});
      })
      .then(data => {
        console.log('Success:', data);
        this.$emit('turnoUpdated', data);
        // Handle successful operation here
        this.$router.push({ name: 'turno-list' });
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
    },
    cancel() {
      this.$router.push({ name: 'turno-list' });
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
