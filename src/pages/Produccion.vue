<template>
  <div class="row">

    <div class="col-md-12">
      <control-planta-header-card :controlPlantaHeader="controlPlantaHeader"></control-planta-header-card>
    </div>
    <div class="col-md-6">
      <control-planta-h-info-card :controlPlantaHeader="controlPlantaHeader"></control-planta-h-info-card>
    </div>
    <div class="col-md-6">
      <control-planta-h-user-card :controlPlantaHeader="controlPlantaHeader"></control-planta-h-user-card>
    </div>
    <!-- <div class="col-md-12">
      <produccion-form :controlPlanta="controlPlanta"> </produccion-form>
    </div> -->
  </div>
</template>
<script>
import ControlPlantaHeaderCard from "./Produccion/ControlPlantaHeaderCard";
import ProduccionForm from "./Produccion/ProduccionForm";
import ControlPlantaHInfoCard from "./Produccion/ControlPlantaHInfoCard";
import ControlPlantaHUserCard from "./Produccion/ControlPlantaHUserCard.vue";

export default {
  components: {
    ControlPlantaHeaderCard,
    ControlPlantaHInfoCard,
    ControlPlantaHUserCard,
    // ProduccionForm,
  },
  data() {
    return {
      controlPlantaHeader: {
    "id": 1,
    "maquina": {
        "id": 1,
        "seccion": {
            "id": 1,
            "codEmp": "05",
            "nombre": "TEJIDO",
            "estado": "A",
            "fechaHoraRegistro": "2024-03-12T18:07:00",
            "usuario": "oandagoy"
        },
        "codigo": "101",
        "nombre": "101",
        "usuario": "oandagoy",
        "fechaHoraRegistro": "2024-03-12T18:08:00",
        "estado": "A"
    },
    "turno": {
        "trx": 1,
        "usuario": "oandagoy",
        "nombre": "1",
        "horaInicio": "14:00:00",
        "horaFin": "21:00:00",
        "fechaDate": "2024-05-03T11:40:25.817+00:00",
        "estado": "Inactivo",
        "codEmp": "05"
    },
    "fechaHora": "2024-03-12T18:13:00",
    "lote": "2135",
    "referencia": "BS100",
    "talla": "L",
    "color": "2135",
    "cantidadProducida": 1000.0000,
    "peso": 200.0000,
    "tejido": "RDIAZ",
    "tecnicaAPC": "ccifuent",
    "calibrePiezaMaquina": "SOPORTEDE",
    "tecnicoMonitor": "ccifuent",
    "coordinadorCalidad": "lllano",
    "fechaHoraCreacion": "2024-03-12T18:13:00",
    "usuario": "oandagoy"
},
      user: {
        fullName: "Mike Andrew",
        title: "Ceo/Co-Founder",
        description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
      },
    };
  },

//   created() {
//       this.fetchControlPlanta();
//     },
//     methods: {
//  // Fetch turno data from the API
//  fetchControlPlantaHeader() {
//       const token = localStorage.getItem('token');  
//       const headers = new Headers({
//       'Authorization': 'Bearer ' + token, 
//       'Content-Type': 'application/json'
//   });
//       const controlPlantaHeaderId = 1;
//       console.log('fetching ControlPlantaHeaderId with id:', controlPlantaHeaderId);
//       fetch(`http://localhost:8800/controlPlantaHeader/${controlPlantaHeaderId}`, 
//       { headers: headers })
//         .then(response => response.json())
//         .then(data => {
//           this.turno = data;
//         })
//         .catch(error => console.error('Error fetching turno data:', error));
//     },

//     },
};
</script>
<style></style>
