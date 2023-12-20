<template>

<body>

  <Sidebar></Sidebar>
  
  <main id="content" style="display: flex;align-items: center;flex-direction: column;">
    
    <h2 class="mb-3 mt-3">Dashboard - Ellite Imóveis</h2>

    <div class="container-fluid mb-3" style="border: 1px solid rgba(173, 173, 173, 0.329); padding: 10px; border-radius: 10px;">

      <div class="row">

        <div class="col">
          <div class="card text-white bg-primary mb-3 w-100">
            <div class="card-header">Clientes Cadastrados</div>
            <div class="card-body">
              <h5 class="card-title"><i class="fa fa-user" aria-hidden="true"></i></h5>
              <p class="card-text">{{ clients }}</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card text-white bg-danger mb-3 w-100">
            <div class="card-header">Contas a Pagar</div>
            <div class="card-body">
              <h5 class="card-title">Mês Atual: R$ {{ somaPagarMes }} </h5>
              <p class="card-text">Total: R$ {{ contasPagar }}</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card text-white bg-success mb-3 w-100">
            <div class="card-header">Contas a Receber</div>
            <div class="card-body">
              <h5 class="card-title">Mês Atual: R$ {{ somaReceberMes }} </h5>
              <p class="card-text">Total: R$ {{ contasReceber }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    
   
    <div class="container" style="border: 1px solid rgb(190, 190, 190); border-radius: 10px;">
      <div class="wrapper">
        <Bar v-if="loaded" :data="chartData" :options="chartOptions"/>
      </div>
    </div>  
    

  </main>

</body>


</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import Sidebar from "../dashboard/Menu.vue";
import axios from 'axios';

export default {
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: 'Valores Recebidos',
            backgroundColor: '#36A2EB',
            data: [] // Dados de contas a receber
          },
          {
            label: 'Valores a Pagar',
            backgroundColor: '#FF6384',
            data: [] // Dados de contas a pagar
          }
        ]
      },
      chartOptions: {
        responsive: true,
      },
      contas:[],
      contas2:[],
      contasPagar: '',
      contasReceber: '',
      somaPagarMes: '',
      somaReceberMes: '',
      clients: '',
    }
  },
  components: {
    Sidebar,
    Bar
  },
  async mounted() {

    this.loaded = false

    await this.fetchContasReceber();
    await this.fetchClients();

  },
  methods:{
    async fetchClients() {
      try {
        const response = await axios.get('/api/clients');
        this.clients = response.data.length;
        console.log('Clientes recebidos:', this.clients);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    },
    async fetchContasReceber() {
      try {

        const response = await axios.get('/api/contasrecebergrafico');
        const response2 = await axios.get('/api/contaspagargrafico');
             
        console.log('Contas Receber:', response.data);

        //Contas a Pagar//
        const values = Object.values(response2.data);
        const sum = values.reduce((acc, curr) => acc + curr, 0);
        const dataAtual = new Date();
        const mesAtual = dataAtual.getMonth() + 1;
        let somaPagarMes = 0;
        if (response2.data.hasOwnProperty(mesAtual.toString())) {
          somaPagarMes = response2.data[mesAtual.toString()];
        }

        //Contas a Receber//
        const values2 = Object.values(response2.data);
        const sum2 = values2.reduce((acc, curr) => acc + curr, 0);
        let somaReceberMes = 0;
        if (response.data.hasOwnProperty(mesAtual.toString())) {
          somaReceberMes = response.data[mesAtual.toString()];
        }

        this.somaPagarMes = somaPagarMes;
        this.somaReceberMes = somaReceberMes;
        this.contasPagar = sum;
        this.contasReceber = sum2;

        this.contas = response.data; //Receber
        this.contas2 = response2.data; //Pagar



        Object.keys(this.contas).forEach(month => {
          const monthIndex = parseInt(month) - 1;
          this.chartData.datasets[0].data[monthIndex] = this.contas[month];
        });

        Object.keys(this.contas2).forEach(month => {
          const monthIndex = parseInt(month) - 1;
          this.chartData.datasets[1].data[monthIndex] = this.contas2[month];
        });

        //console.log("CHAT",this.contas);

        this.loaded = true

      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    },

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
