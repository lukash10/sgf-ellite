<template>

<body>

<Sidebar style="display: ;"></Sidebar>
    
<main id="content" class="m-2 p-3" style="display: flex;align-items: center;flex-direction: column;">
    
   
    <form @submit="onSubmit" class="w-100 shadow-sm" style="border:1px solid rgb(206, 206, 206); border-radius:5px;padding: 30px">
        <h3 class="text-center mb-4">Cadastro de Contas a Pagar</h3>
        <div class="container-fluid">

            <div class="row">

                <div class="col-12">
                    <div class="form-floating mb-3">
                        <input v-model="form.descricao" type="text" class="form-control" id="floatingDescricao" placeholder="Descrição">
                        <label for="floatingDescricao"><i class="fa-solid fa-signature"></i> Descrição do Recebimento</label>
                     </div>
                </div>

                <div class="col-12">
                    <label class="typo__label"><b>Selecione um Cliente/Fornecedor</b></label>
                    <multiselect v-model="form.clienteSelected" :options="clientOptions" placeholder="Selecione um cliente" label="nome"></multiselect>
                    <!-- <pre> {{ form.clienteSelected }}</pre> -->
                </div>

                <div class="col-6 mt-3">
                    <div class="form-floating mb-3">
                        <input v-model="form.emissaoPagamento" type="text" v-mask="'##/##/####'" class="form-control" id="floatingDataVenc" placeholder="Data Vencimento">
                        <label for="floatingDataVenc"><i class="fa-solid fa-calendar"></i> Data Emissão</label>
                    </div>
                </div>

                <div class="col-6 mt-3">
                    <div class="form-floating mb-3">
                        <input v-model="form.dataVencimento" type="text" v-mask="'##/##/####'" class="form-control" id="floatingDataVenc" placeholder="Data Vencimento">
                        <label for="floatingDataVenc"><i class="fa-solid fa-calendar"></i> Data Vencimento</label>
                    </div>
                </div>

                <div class="col-6 mt-3 mb-2">
                    <div class="form-floating mb-3">
                    <input v-model="form.valorTotal" type="text" v-money="money" class="form-control" id="floatingValorTotal" placeholder="Valor Total"/>
                    <label for="floatingValorTotal"><i class="fa-solid fa-signature"></i> Valor Total R$</label>
                    </div>
                </div>

                <div class="col-6 mt-3 mb-3" style="border-radius:10px;border: 1px solid rgb(207, 207, 207);">
                    <b><b-form-group label="Status do Recebimento"></b-form-group></b>
                    <b-form-radio-group  
                        v-model="form.statusPagamento"
                        :options="optionsRecebimento"
                        class="mb-3 "
                        value-field="item"
                        text-field="name"
                        disabled-field="notEnabled"
                    ></b-form-radio-group>
                </div>
                
                <hr>



                
            </div>

            <div class="buttons mt-5" style="padding-bottom: 10px;">
               
                <b-button type="submit" style="background-color: rgb(0 131 96);"><i class="fa-solid fa-user"></i> {{ mode === 'ADD' ?  'Cadastrar' : 'Editar' }}</b-button>
                <router-link to="/">
                    <b-button class="mx-2" variant="danger"><i class="fa-solid fa-house"></i> Voltar</b-button>
                </router-link>
                
            </div>


        </div>
        
    </form>


</main>

</body>




</template>

<script>

import Multiselect from 'vue-multiselect'
import { VueMaskDirective } from 'v-mask';
import Sidebar from "../../Menu.vue";
import axios from 'axios';
import { VMoney } from 'v-money'
import moment from 'moment';

export default {
    data() {
    return {
        mode: 'ADD',
        cliente: null,
        clientOptions: [],
        optionsRecebimento: [
            { item: 'Pendente', name: 'Pendente' },
            { item: 'Pago', name: 'Pago' },
        ],
        form: {
            descricao: '',
            idCliente: null,
            clienteSelected: null,
            emissaoPagamento: '',
            dataVencimento: '',
            statusPagamento: '',
            valorTotal: 0
        },
        money: {
            decimal: ',',
            thousands: '.',
            prefix: 'R$ ',
            precision: 2,
            masked: false // Define como true se desejar uma máscara permanente
        },
    };
  },
  directives: {
    mask: VueMaskDirective,
    money: VMoney
  },
  components: {
    Sidebar,
    Multiselect
  },
  async mounted() {

    const idContaReceber = this.$route.query.id;
    
    if(idContaReceber){

      this.mode = 'EDIT';

      const r = await axios.get(`/api/contaspagar/${idContaReceber}`, this.form);

      const dados = r.data;

      console.log("Dados Edição",dados);

      const response = await axios.get('/api/clients'); 
      this.clientOptions = response.data.map(client => ({ id: client.id, nome: client.nome, tipo: client.clienteFornecedor }));
      console.log("Client Options", this.clientOptions);

      // Suponha que dados.ClientID seja o ID que você deseja comparar
      const dadosClientId = dados.ClientId;
      console.log("dadosClientId", dadosClientId)
      // Encontrar o objeto em clientOptions que corresponde ao ClientID
      const clienteEncontrado = this.clientOptions.find(cliente => cliente.id === dadosClientId);

      this.form.descricao = dados.descricao;
      this.form.clienteSelected = clienteEncontrado;
      
      const dataCompletaFormatada = moment(dados.dataVencimento, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY');
      const dataCompletaFormatadaa = moment(dados.emissaoPagamento, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY');

      this.form.dataVencimento = dataCompletaFormatada;
      this.form.emissaoPagamento = dataCompletaFormatadaa;
      this.form.statusPagamento = dados.statusPagamento;
      this.form.valorTotal = dados.valorTotal;


    }



    this.fetchClients();
  },
  methods: {
    async fetchClients() {
      try {
        const response = await axios.get('/api/clients');
        
        this.clientOptions = response.data.map(client => ({ id: client.id, nome: client.nome, tipo: client.clienteFornecedor }));

        console.log("Clientes" , this.clientOptions);
        

      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    },
    async onSubmit(event) {
        
      try {

          if (this.mode === 'ADD') {
            event.preventDefault();
                      
            
            const dataCompletaFormatada = moment(this.form.dataVencimento, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
            const dataCompletaFormatadaa = moment(this.form.emissaoPagamento, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
            this.form.dataVencimento = dataCompletaFormatada;
            this.form.emissaoPagamento = dataCompletaFormatadaa;

            this.form.idCliente = this.form.clienteSelected.id;
            this.form.clienteSelected = this.form.clienteSelected.nome

            const valorLimpo = this.form.valorTotal.replace(/^R\$ |(\.)+/g, '');
            const valorNumerico = parseFloat(valorLimpo.replace(',', '.'));
            this.form.valorTotal = valorNumerico;

            const response = await axios.post('api/contaspagar', this.form);

            alert("Dados salvos com sucesso.");
            this.$router.push('/listPagar');
            
          } else {
            event.preventDefault();
            
            const idContaReceber = this.$route.query.id;

            const dataCompletaFormatada = moment(this.form.dataVencimento, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
            const dataCompletaFormatadaa = moment(this.form.emissaoPagamento, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
            this.form.dataVencimento = dataCompletaFormatada;
            this.form.emissaoPagamento = dataCompletaFormatadaa;

            this.form.idCliente = this.form.clienteSelected.id;
            this.form.clienteSelected = this.form.clienteSelected.nome;

            const valorLimpo = this.form.valorTotal.replace(/^R\$ |(\.)+/g, '');
            const valorNumerico = parseFloat(valorLimpo.replace(',', '.'));
            this.form.valorTotal = valorNumerico;

            const response = await axios.put(`api/contaspagar/${idContaReceber}`, this.form);

            alert("Dados salvos com sucesso.");
            this.$router.push('/listPagar');

          }
            
        } catch (error) {
            console.error(error);
        }

    },
  }
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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