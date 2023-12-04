<template>

<body>

<Sidebar></Sidebar>
    
<main id="content" class="m-2 p-3" style="display: flex;align-items: center;flex-direction: column;">
    
  <h3 class="text-center mb-4">Listagem de Contas a Receber</h3>
    
  <table class="table">

    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Descrição</th>
        <th scope="col">Data Vencimento</th>
        <th scope="col">Status Recebimento</th>
        <th scope="col">Tipo Cliente</th>
        <th scope="col">Valor Total</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(conta, index) in contas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ conta.clienteFornecedor }}</td>
          <td>{{ conta.descricao }}</td>
          <td>{{ formatarData(conta.dataVencimento) }}</td>
          <td :class="{'bg-danger': conta.statusRecebimento === 'Pendente', 'bg-success': conta.statusRecebimento === 'Recebido' }">{{ conta.statusRecebimento }}</td>
          <td>{{ conta.tipoCliente }}</td>
          <td>{{ conta.valorTotal }}</td>
        </tr>
    </tbody>

  </table>

</main>

</body>
  
  
</template>
    
<script>
import axios from 'axios';
import Sidebar from "../../Menu.vue";

export default {
  data() {
    return {
      contas: [] // Array para armazenar os clientes
    };
  },
  components: {
    Sidebar
  },
  mounted() {
    this.fetchClients(); // Ao montar o componente, buscar os clientes
  },
  methods: {
    async fetchClients() {
      try {
        const response = await axios.get('/api/contasreceber');
        this.contas = response.data;
        console.log('Contas recebidos:', this.contas);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    },
    formatarData(data) {
      const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
      return dataFormatada;
    }
  }
}
</script>
    
<style scoped>

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  min-height: 100dvh;
  display: flex;
}

#sidebarMenu{
  min-width: 250px;
  display: flex;
}

#content{
  flex-grow: 1;
}

@media only screen and (max-width: 992px){
  #sidebarMenu{
    display: none;
  }
}

.bg-danger {
  background: red;
  border-radius: 5px;
  color: white;
}

.bg-success {
  background-color: rgb(7, 97, 11)(0, 255, 64) !important;
  border-radius: 5px;
  color: white;
}


</style>