<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title">
        <div class="table-responsive">
          <base-table
            :data="table1.data"
            :columns="table1.columns"
            thead-classes="text-primary"
          >
          </base-table>
        </div>
      </card>
    </div>

  </div>
</template>
<script>
import { BaseTable } from "@/components";

export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      table1: {
        title: "Turnos",
        columns: ['trx','nombre','usuario','estado','inicio','fin','fecha'],
        data: [],
      },
    };
  },
  created() {

    this.loadTurnos();

  },
  methods: {

    loadTurnos() {
      fetch('http://127.0.0.1:8800/api/turnos')
        .then(response => response.json())
        .then(data => {
          this.table1.data = data.datos;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          alert('Error fetching Turnos data'); 
        });
    }
  }
};
</script>
