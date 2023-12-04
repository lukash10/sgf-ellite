<template>

<body>

<Sidebar style="display: ;"></Sidebar>
    
<main id="content" class="m-2 p-3" style="display: flex;align-items: center;flex-direction: column;">
    
  <h3 class="text-center mb-4">Listagem de Contas</h3>
    
  <table class="table">

    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Descrição</th>
        <th scope="col">Tipo da Conta</th>
        <th scope="col">Tipo da Despesa</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(conta, index) in contas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ conta.descricao }}</td>
          <td>{{ conta.tipoConta }}</td>
          <td>{{ conta.tipoDespesa }}</td>
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
    this.fetchContas(); // Ao montar o componente, buscar os clientes
  },
  methods: {
    async fetchContas() {
      try {
        const response = await axios.get('/api/contas');
        this.contas = response.data;
        console.log('Clientes recebidos:', this.contas);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
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



</style>