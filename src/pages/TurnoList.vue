<template>
<div class="row">
  <div class="col-12">
    <card :title="table1.title">
      <div class="table-responsive">
        <base-table :data="table1.data" :columns="table1.columns" thead-classes="text-primary">
          <template slot-scope="{ row }">
            <td>{{ row.nombre }}</td>
            <td>{{ row.usuario }}</td>
            <td>{{ row.estado }}</td>
            <td>{{ row.inicio }}</td>
            <td>{{ row.fin }}</td>
            <td>{{ row.fecha }}</td>
            <td class="td-actions text-left">
              
          <base-button type="info" size="sm" @click="editTurno(row)" icon>
            <i class="tim-icons icon-pencil"></i>
          </base-button>
          <base-button type="danger" size="sm" @click="deleteTurno(row)" icon>
            <i class="tim-icons icon-simple-remove"></i>
          </base-button>

        </td>
          </template>
        </base-table>
      </div>
      <base-button slot="footer" type="primary" fill @click="createTurno">Crear</base-button>

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
      columns: ['nombre','usuario','estado','inicio','fin','fecha', 'actions'],
      data: [],
    },
  };
},
created() {

  this.loadTurnos();

},
methods: {

  loadTurnos() {
  const token = localStorage.getItem('token');  // Retrieve the token from storage
  const headers = new Headers({
    'Authorization': 'Bearer ' + token,  // Use Bearer authentication scheme
    'Content-Type': 'application/json'
  });

  fetch('http://127.0.0.1:8800/api/turnos', { headers: headers })
    .then(response => response.json())
    .then(data => {
      this.table1.data = data.datos;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Error fetching Turnos data'); 
    });
},

  editTurno(row) {
    // alert('Editando turno: ' + row.trx);  
    this.$router.push({ name: 'editTurno', params: { id: row.trx } });
  },
  createTurno() {
  this.$router.push({ name: 'editTurno' });  
      },


      deleteTurno(row) {
  const token = localStorage.getItem('token');  // Retrieve the token from storage
  const headers = new Headers({
    'Authorization': 'Bearer ' + token,  // Use Bearer authentication scheme
    'Content-Type': 'application/json'
  });

  const url = `http://localhost:8800/api/delete-turno/${row.trx}`;  // Use the `id` from the row to construct the URL

  console.log('Deleting Turno:', row.trx);
  fetch(url, {
    method: 'DELETE',
    headers: headers
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(() => {
    alert('Turno deleted successfully');
    this.loadTurnos();  // Reload the list of turnos to reflect the deletion
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error deleting Turno');
  });
},



}
};
</script>
