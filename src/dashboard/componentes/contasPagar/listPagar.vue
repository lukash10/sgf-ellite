<template>

<body>

<Sidebar></Sidebar>
    
<main id="content" class="m-2 p-3" style="display: flex;align-items: center;flex-direction: column;">
    
  <h3 class="text-center mb-4">Listagem de Contas a Pagar</h3>
    
  <table class="table">

    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Descrição</th>
        <th scope="col">Emissão Pagamento</th>
        <th scope="col">Data Vencimento</th>
        <th scope="col">Status Recebimento</th>
        
        <th scope="col">Valor Total</th>
        <th scope="col">Editar</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(conta, index) in contas" :key="index">
          <th scope="row">
            <button @click="alterarStatusRecebimento(conta)" style="border: none;">
              <i v-if="conta.statusPagamento === 'Pendente'" class="fa-brands fa-cc-visa fa-2xl" style="color:green"></i>
              <i v-else class="fa-brands fa-cc-visa fa-2xl" style="color:red"></i>
            </button>
          </th>
          <td>{{ conta.clientes.nome }}</td>
          <td>{{ conta.descricao }}</td>
          <td>{{ formatarData(conta.emissaoPagamento) }}</td>
          <td>{{ formatarData(conta.dataVencimento) }}</td>
          <td :class="{'bg-danger': conta.statusPagamento === 'Pendente', 'bg-success': conta.statusPagamento === 'Pago' }">{{ conta.statusPagamento }}</td>
          <td>R$ {{ conta.valorTotal }}</td>
          <td>
            <button @click="editarContaReceber(conta.id)" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i> </button>
          </td>
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
    async alterarStatusRecebimento(conta) {
      if (conta.statusPagamento === 'Pendente') {
        conta.statusPagamento = 'Pago'; // Altera para 'Recebido' se estiver 'Pendente'
      } else if (conta.statusPagamento === 'Pago') {
        conta.statusPagamento = 'Pendente'; // Altera para 'Pendente' se estiver 'Recebido'
      }

      // Aqui você pode fazer a lógica para atualizar no servidor via requisição axios se necessário
      
      const response = await axios.put(`/api/contaspagar/${conta.id}`, { statusPagamento: conta.statusPagamento });
      console.log('Novo status:', conta.statusPagamento);
      console.log("response", response);
    },
    async editarContaReceber(contaRec) {
      this.$router.push(`/cadPagar?id=${contaRec}`);
    },
    async fetchClients() {
      try {
        const response = await axios.get('/api/contaspagar');
        this.contas = response.data;
        console.log('Contas recebidos:', response);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    },
    formatarData(data) {
      const dataObj = new Date(data);
      const dia = dataObj.getDate().toString().padStart(2, '0');
      const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
      const ano = dataObj.getFullYear();
      return `${dia}/${mes}/${ano}`;
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
  border-radius: 100px;
  text-align: center;
}

.bg-success {
  background-color: rgb(7, 97, 11)(0, 255, 64) !important;
  border-radius: 5px;
  color: white;
  border-radius: 100px;
  text-align: center;
}


</style>