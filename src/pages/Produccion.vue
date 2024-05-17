<template>
  <div class="row">

    <div class="col-md-12">
      <div class="card text-white bg-info mb-3" >
        <div class="card-body text-center">
          Reporte de Producción
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <control-planta-header-card :controlPlantaHeader="controlPlantaHeader"></control-planta-header-card>
    </div>
    <div class="col-md-6">
      <control-planta-h-info-card :controlPlantaHeader="controlPlantaHeader"></control-planta-h-info-card>
      <control-planta-h-user-card :controlPlantaHeader="controlPlantaHeader"></control-planta-h-user-card>

    </div>

    <div class="col-md-6">
      <produccion-form :controlPlanta="controlPlantaHeader.controlPlantaNew"> </produccion-form>
      <!-- <produccion-form v-if="controlPlanta && Object.keys(controlPlanta).length > 0" :controlPlanta="controlPlantaHeader.controlPlantaNew"></produccion-form> -->
    </div>
    
    <!-- <div class="col-md-6">
      <control-planta-h-user-card :controlPlantaHeader="controlPlantaHeader"></control-planta-h-user-card>
    </div> -->



    <!-- <div class="col-md-12">
      <control-planta-card :user="user"> </control-planta-card>
    </div> -->

   <div>
      <modal :show.sync="modal0">
        <template slot="header">
          <h5 class="modal-title" id="exampleModalLabel">No hay Programación Asignada a esta Máquina</h5>
        </template>
        <div>
          <!-- Contenido del modal -->
        </div>
        <template slot="footer">
          <base-button class="animation-on-hover" type="danger" @click="redirect">Close</base-button>
          <!-- fill @click="cancel" -->
          <!-- <base-button type="primary">Save changes</base-button> -->
        </template>
      </modal>
    </div>

  </div>
</template>
<script>
import ControlPlantaHeaderCard from "./Produccion/ControlPlantaHeaderCard";
import ProduccionForm from "./Produccion/ProduccionForm";
import ControlPlantaHInfoCard from "./Produccion/ControlPlantaHInfoCard";
import ControlPlantaHUserCard from "./Produccion/ControlPlantaHUserCard.vue";
import Modal from "@/components/Modal.vue";
// import ControlPlantaCard from "./Produccion/ControlPlantaCard.vue";

export default {
  components: {
    ControlPlantaHeaderCard,
    ControlPlantaHInfoCard,
    ControlPlantaHUserCard,
    ProduccionForm,
    Modal,
    // ControlPlantaCard,
  },
  data() {
    return {


      controlPlantaHeader: {
        controlPlantaNew: {},
        maquina: {
        seccion: {}  
        },
        turno: {},

      },  

      modal0: false,
      disableCloseButton: true 

    };
  },
  created() {
      this.fetchControlPlantaHeader();
      // this.fetchControlPlanta();
    },
    methods: {

      fetchControlPlantaHeader() {
      const token = localStorage.getItem('token');
      const headers = new Headers({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      });
      const maquinaId = 5;
      console.log('fetching maquinaId with id:', maquinaId);

      fetch(`http://localhost:8800/controlPlantaHeader/params/${maquinaId}`, 
      // fetch(`http://localhost:8800/controlPlantaHeader/maquina/${maquinaId}`, 
      {
    headers: headers
})
.then(response => {
    if (response.status === 404) {
        this.errorMessage = 'No se encontró la entidad correspondiente al maquinaId: ' + maquinaId; // Mensaje de error personalizado
        this.modal0 = true; // Mostrar el modal con el mensaje de error
        this.disableCloseButton = true; // Deshabilitar el botón Close cuando se muestra el modal
        throw new Error('Not Found'); // Lanzar una excepción para detener el flujo de la promesa
    } else if (!response.ok) {
        throw new Error('Error de red: ' + response.status); // Manejar otros errores de red
    }
    return response.json(); // Continuar con el flujo normal si no hay errores
})
.then(data => {
    this.controlPlantaHeader = data; // Actualizar los datos normalmente si no hay error
})
.catch(error => console.error('No se encontró la entidad correspondiente al maquinaId wmv:', error)); // Manejo del error

    },


  //   fetchControlPlanta() {
  //     const token = localStorage.getItem('token');  
  //     const headers = new Headers({
  //     'Authorization': 'Bearer ' + token, 
  //     'Content-Type': 'application/json'
  // });
  //     console.log('fetching ControlPlanta with starter');
  //     fetch(`http://localhost:8800/controlPlanta/starter`, 
  //     { headers: headers })
  //       .then(response => response.json())
  //       .then(data => {
  //         this.controlPlanta = data;
  //       })
  //       .catch(error => console.error('Error fetching turno data:', error));
  //   },

    redirect() {
      this.$router.push({ name: 'dashboard' });
    }

    },
};
</script>
<style></style>
