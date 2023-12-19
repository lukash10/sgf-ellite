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
              <h5 class="card-title">Img</h5>
              <p class="card-text">100.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-danger mb-3 w-100">
            <div class="card-header">Contas a Pagar</div>
            <div class="card-body">
              <h5 class="card-title">Mês Atual: R$ </h5>
              <p class="card-text">Total: R$</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-success mb-3 w-100">
            <div class="card-header">Contas a Receber</div>
            <div class="card-body">
              <h5 class="card-title">Mês Atual: R$ </h5>
              <p class="card-text">Total: R$</p>
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
import moment from 'moment';

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
      contas:[]
    }
  },
  components: {
    Sidebar,
    Bar
  },
  async mounted() {

    this.loaded = false

    await this.fetchContasReceber();

  },
  methods:{
    async fetchContasReceber() {
      try {

        const response = await axios.get('/api/contasrecebergrafico');
        const response2 = await axios.get('/api/contaspagargrafico');
             
        console.log('Contas Pagar:', response2.data);

        this.contas = response.data;
        this.contas2 = response2.data;

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
