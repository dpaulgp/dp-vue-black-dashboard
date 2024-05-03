<template>
<card>
  <!-- <h5 slot="header" class="title">Editar Turno</h5> -->
  <div class="row">
    <div class="col-md-4 pr-md-1">
      <base-input
        label="Reportadas"
        placeholder="Cantidad"
        v-model="controlPlanta.reporte"
      >
      </base-input>
    </div>
  </div>


  <div class="row">
  <div class="col-md-4">
    <label for="finTurno">Acumulado</label> 
    <h3 class="card-title">
              <i class="tim-icons icon-components text-primary"></i> 100
    </h3>
  </div>
</div>

<div class="row">
  <div class="col-md-4">
    <label for="finTurno">Fin de Turno</label> <!-- Asegúrate de que el 'for' en el label coincida con el 'id' del select -->
    <select class="form-control" id="finTurno" v-model="controlPlanta.finTurno">
      <option v-for="finTurnoOption in finTurnoOptions" :key="finTurnoOption" :value="finTurnoOption">{{ finTurnoOption }}</option>
    </select>
  </div>
</div>

<div class="row">
  <div class="col-md-4">
    <label for="finTurno">Faltante</label> 
    <h3 class="card-title">
              <i class="tim-icons icon-alert-circle-exc text-primary"></i> 12
    </h3>
  </div>
</div>
<div class="row">
      <div class="col-md-8">
        <base-input>
          <label>Observaciones</label>
          <textarea
            rows="4"
            cols="80"
            class="form-control"
            placeholder="..."
            v-model="controlPlanta.observaciones"
          >
          </textarea>
        </base-input>
      </div>
    </div>







  <!-- <div class="row"> -->
<!-- 
    <div class="col-md-6 pr-md-1">
      <base-input
        label="Inicio"
        type="time"
        v-model="turno.horaInicio"
      ></base-input>
    </div>
    <div class="col-md-6 pl-md-1">
      <base-input
        label="Fin"
        type="time"
        v-model="turno.horaFin"
      ></base-input>
    </div> -->
  <!-- </div> -->
  <!-- <div class="row">
  <div class="col-md-4">
    <label for="estado">Estado</label>
    <select class="form-control" id="estado" v-model="turno.estado">
      <option v-for="estado in estados" :key="estado" :value="estado">{{ estado }}</option>
    </select>
  </div> -->
<!-- </div> -->
  <!-- <base-button slot="footer" type="primary" fill @click="saveChanges">Guardar Cambios</base-button>
  <base-button slot="footer" type="primary" fill @click="cancel">Cancel</base-button> -->

</card>
</template>

<script>
export default {
  props: {
    controlPlanta: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      finTurnoOptions: ["S", "N"]
    };
  },
  // methods: {
  //   saveChanges() {

  //     const token = localStorage.getItem('token');  
  //     const headers = new Headers({
  //   'Authorization': 'Bearer ' + token,  // Use Bearer authentication scheme
  //   'Content-Type': 'application/json'
  // });
  //     console.log(this.turno);

  //     fetch('http://localhost:8800/api/createTurno', {
  //       method: 'POST',
  //       headers: headers,
  //       body: JSON.stringify(this.turno),
  //     })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.text().then(text => text ? JSON.parse(text) : {});
  //     })
  //     .then(data => {
  //       console.log('Success:', data);
  //       this.$emit('turnoUpdated', data);
  //       // Handle successful operation here
  //       this.$router.push({ name: 'turno-list' });
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       // Handle errors here
  //     });
  //   },
  //   cancel() {
  //     this.$router.push({ name: 'turno-list' });
  //   }
  // }
};
</script>


