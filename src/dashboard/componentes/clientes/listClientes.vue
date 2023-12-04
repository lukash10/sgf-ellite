<template>

<body>

<Sidebar style="display: ;"></Sidebar>
    
<main id="content" class="m-2 p-3" style="display: flex;align-items: center;flex-direction: column;">
    
  <h3 class="text-center mb-4">Listagem de Clientes</h3>
    
  <table class="table">

    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Contato</th>
        <th scope="col">Email</th>
        <th scope="col">Tipo</th>
        <th scope="col">CPF</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(client, index) in clients" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ client.nome }}</td>
          <td v-if="client.telefone">{{ client.telefone }}</td>
          <td v-if="client.celular">{{ client.celular }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.clienteFornecedor }}</td>
          <td>{{ client.cpf }}</td>
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
      clients: [] // Array para armazenar os clientes
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
        const response = await axios.get('/api/clients');
        this.clients = response.data;
        console.log('Clientes recebidos:', this.clients);
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