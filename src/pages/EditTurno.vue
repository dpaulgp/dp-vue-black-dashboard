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
      turno: {}
    };
  },
  created() {
    this.fetchTurno();
  },
  methods: {
    fetchTurno() {
      // Supongamos que se obtiene el ID del router
      const turnoId = this.$route.params.id;
      fetch(`http://localhost:8800/api/turno/${turnoId}`)
        .then(response => response.json())
        .then(data => {
          this.turno = data;
        })
        .catch(error => console.error('Error fetching turno data:', error));
    }
  }
};
</script>
