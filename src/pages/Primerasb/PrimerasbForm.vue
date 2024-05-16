<template>
  <card>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <label for="causaControlPlanta">Causa de Control de Planta</label>
        <select class="form-control" id="causaControlPlanta" v-model="controlPlanta.causa">
          <option v-for="causa in causasOptions" :key="causa.id" :value="causa.id">
            {{ causa.nombre }}
          </option>
        </select>
      </div>
      <div class="col-md-4 pr-md-1">
      <base-input
        label="Reportadas"
        placeholder="Unidades"
        v-model="controlPlanta.reporte1AsB"
      >
      </base-input>
    </div>
    <div class="col-md-4 pr-md-1">
      <base-input
        label="Peso"
        placeholder="Kg"
        v-model="controlPlanta.peso1B"
      >
      </base-input>
    </div>
    </div>
    <div class="row">
      <div class="col-md-8 pr-md-1">
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
    <div class="col-md-6 pr-md-1">
  <label for="finTurno">Acumulado 1asB</label> 
  <h3 class="card-title">
    <i class="tim-icons icon-components text-primary"></i> {{ controlPlanta.acumuladoPrimerasbCP }}
  </h3>
</div>
    <base-button slot="footer" type="primary" fill @click="saveChanges">Aceptar</base-button>
  </card>
  </template>
  
  <script>
  export default {
    props: {
      controlPlanta: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        causasOptions: [],
      };
    },
    mounted() {
      this.fetchCausas();
    },
    methods: {
      fetchCausas() {
        const token = localStorage.getItem('token');
        fetch('http://localhost:8800/causas/tipo/AB', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.causasOptions = data.map(item => ({
            nombre: item.nombre, // Usando 'nombre' para el texto visible en el select
            id: item.id // Usando 'id' como valor para cada opción del select
          }));
        })
        .catch(error => {
          console.error('Error:', error);
        });
      },
      saveChanges() {
        this.controlPlanta.tipoTransaccion = 'AB';
        const token = localStorage.getItem('token');  
        const headers = new Headers({
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        });
  
        console.log(this.controlPlanta);
        console.log(this.controlPlanta.controlPlantaHeader);
  
        fetch('http://localhost:8800/controlPlanta/registrarEvento', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(this.controlPlanta),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text().then(text => text ? JSON.parse(text) : {});
        })
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
  