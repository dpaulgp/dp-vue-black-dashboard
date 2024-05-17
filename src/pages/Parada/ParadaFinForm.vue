<template>
  <card title="Fin de Parada">
    <div class="row">
      
 
      <div class="col-md-2 pr-md-1">
        <label>Usuario</label>
        <p class="card-text">{{ controlPlanta.usuarioTransaccion }}</p>
      </div>


      <div class="col-md-2 pr-md-1">
        <label>Fecha</label>
        <p class="card-text">{{ controlPlanta.inicioParte }}</p>
      </div>

      <div class="col-md-3 pr-md-1">
        <label for="causaControlPlanta">Causa de Parada</label>
        <select class="form-control" id="causaControlPlanta" v-model="controlPlanta.causa" :disabled="controlPlanta.estado === 1">
          <option v-for="causa in causasOptions" :key="causa.id" :value="causa.id">
            {{ causa.nombre }}
          </option>
        </select>
      </div>

      
      <div class="col-md-4 pr-md-1">
        <base-input>
          <label>Observaciones</label>
          <textarea
            rows="4"
            cols="80"
            class="form-control"
            placeholder="..."
            v-model="controlPlanta.observaciones"
            :disabled="controlPlanta.estado === 1"
          >
          </textarea>
        </base-input>
      </div>


    </div>

<base-button slot="footer" type="primary" fill @click="saveChanges" v-show="controlPlanta.estado === 1">Aceptar</base-button>

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
        fetch('http://localhost:8800/causas/tipo/PR', {
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
        this.controlPlanta.tipoTransaccion = 'FP';
        this.controlPlanta.estado = '0';

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
  