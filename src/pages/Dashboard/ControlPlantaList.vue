<template>
<div class="row">
  <div class="col-12">
    <card :title="table1.title">
      <div class="table-responsive">
        <base-table :data="table1.data" :columns="table1.columns" thead-classes="text-primary">
          <template slot-scope="{ row }">
            <td>{{ row.maquina.codigo }}</td>
            <td>{{ row.talla }}</td>
            <td>{{ row.referencia }}</td>
            <td>{{ row.lote }}</td>
            <td>{{ row.cantidadProducida }}</td>
            <td>{{ row.acumulado }}</td>
            <td>{{ row.faltante }}</td>
            <td class="td-actions text-left">
              

              <base-button round icon type="primary" v-show="row.estado === 0" fill @click="reload">
              <i class="tim-icons icon-heart-2"></i>
             </base-button>

             <base-button round icon type="danger" v-show="row.estado === 6" fill @click="reload">
              <i class="tim-icons icon-simple-remove"></i>
             </base-button>

             <base-button round icon type="info" v-show="row.estado === 1" fill @click="reload">
              <i class="tim-icons icon-settings"></i>
             </base-button>


        </td>
          </template>
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
      title: "Estado Actual",
      columns: ['maquina','talla','referencia','lote','Cantidad Programada','acumulado','faltante', 'estado'],
      data: [],
    },
  };
},
created() {

  this.loadWorking();

},
methods: {

  loadWorking() {
  const token = localStorage.getItem('token');  // Retrieve the token from storage
  const headers = new Headers({
    'Authorization': 'Bearer ' + token,  // Use Bearer authentication scheme
    'Content-Type': 'application/json'
  });

  fetch('http://localhost:8800/reportes/working/', { headers: headers })
    .then(response => response.json())
    .then(data => {
      this.table1.data = data;
      console.log('Turnos data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Error fetching Turnos data'); 
    });
},

reload() {
  this.loadWorking();  
    },


}
};
</script>
