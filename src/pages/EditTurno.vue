<template>
  <div class="row">
    <div class="col-md-8">
      <edit-turno-form :turno="turno"></edit-turno-form>
    </div>
    <div class="col-md-4">
      <turno-card :turno="turno"></turno-card>
    </div>
  </div>
</template>
<script>
import EditTurnoForm from "./Turno/EditTurnoForm";
import TurnoCard from "./Turno/TurnoCard";

export default {
  components: {
    EditTurnoForm,
    TurnoCard
  },
  data() {
    return {
      isCreating: false,
      turno: {}
    };
  },
  created() {

    if (this.$route.params.id) {
      this.fetchTurno();
    } else {
    this.isCreating = true;  // No id provided, set for creation
    this.turno = this.getDefaultTurno();  // Initialize with default or empty data
  }
  },
  methods: {
    fetchTurno() {
      const turnoId = this.$route.params.id;
      console.log('fetching turno with id:', turnoId);
      fetch(`http://localhost:8800/api/turno/${turnoId}`)
        .then(response => response.json())
        .then(data => {
          this.turno = data;
        })
        .catch(error => console.error('Error fetching turno data:', error));
    },
    getDefaultTurno() {
    // Return a default or empty turno object
    return {
      nombre: '',
      estado: 'Activo',
      inicio: '',
      fin: '',
    };
  },
  }
};
</script>
