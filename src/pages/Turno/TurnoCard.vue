<template>
    <card>
      <h5 slot="header" class="title">Detalle del Turno</h5>
      <h6>Usuario: {{ turno.usuario }}</h6>
      <h6>Nombre: {{ turno.nombre }}</h6>
      <h6>Estado: {{ turno.estado }}</h6>
      <h6>Inicio: {{ turno.inicio }}</h6>
      <h6>Fin: {{ turno.fin }}</h6>
      <!-- <base-button @click="editTurno(turno.id)">Editar</base-button> -->
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
  };
  </script>
  