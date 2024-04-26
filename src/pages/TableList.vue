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
  },data() {
    return {
      table1: {
        title: "Simple Table",
        columns: ['id', 'nroTrans', 'codEmp', 'linea', 'script', 'estado', 'resultadoEjecucion', 'fechaEjecucion', 'tipo', 'usuario'],
        data: [],
      },
    };
  },
  created() {
  fetch('http://192.168.1.135:8880/es/getES')
    .then(response => response.json())
    .then(data => {
      this.table1.data = data.map(item => ({
        id: item.id,
        nroTrans: item.nroTrans,
        codEmp: item.codEmp,
        linea: item.linea,
        script: item.script,
        estado: item.estado,
        resultadoEjecucion: item.resultadoEjecucion,
        fechaEjecucion: item.fechaEjecucion,
        tipo: item.tipo,
        usuario: item.usuario
      }));
    })
    .catch(error => console.error(error));
}
};
</script>
<style></style>
