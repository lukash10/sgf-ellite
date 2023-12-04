<template>

<body>

<Sidebar style="display: ;"></Sidebar>
    
<main id="content" class="m-2 p-3" style="display: flex;align-items: center;flex-direction: column;">
    
   
    <form @submit="onSubmit" class="w-100 shadow-sm" style="border:1px solid rgb(206, 206, 206); border-radius:5px;padding: 30px">
        <h3 class="text-center mb-4">Cadastro de Contas a Receber</h3>
        <div class="container-fluid">

            <div class="row">

                <div class="col-12">
                    <div class="form-floating mb-3">
                        <input v-model="form.descricao" type="text" class="form-control" id="floatingDescricao" placeholder="Descrição">
                        <label for="floatingDescricao"><i class="fa-solid fa-signature"></i> Descrição do Recebimento</label>
                     </div>
                </div>

                <div class="col-8">
                    <label class="typo__label"><b>Selecione um Cliente/Fornecedor</b></label>
                    <multiselect v-model="form.nomeCliente" :options="clientOptions" placeholder="Selecione um cliente" label="nome" track-by="id"></multiselect>
                </div>

                <div class="col-6 mt-3">
                    <div class="form-floating mb-3">
                        <input v-model="form.dataVencimento" type="text" v-mask="'##/##/####'"  class="form-control" id="floatingDataVenc" placeholder="Data Vencimento">
                        <label for="floatingDataVenc"><i class="fa-solid fa-signature"></i> Data Vencimento</label>
                    </div>
                </div>

                <div class="col-6 mt-3">
                    <div class="form-floating mb-3">
                    <input v-model="form.valorTotal" type="text" v-money="money" class="form-control" id="floatingValorTotal" placeholder="Valor Total"/>
                    <label for="floatingValorTotal"><i class="fa-solid fa-signature"></i> Valor Total R$</label>
                    </div>
                </div>

                <hr>

                <div class="col-12 mt-2">
                    <b><b-form-group label="Status do Recebimento"></b-form-group></b>
                    <b-form-radio-group  
                        v-model="form.statusRecebimento"
                        :options="optionsRecebimento"
                        class="mb-3 "
                        value-field="item"
                        text-field="name"
                        disabled-field="notEnabled"
                    ></b-form-radio-group>
                </div>


                
            </div>

            <div class="buttons mt-5" style="padding-bottom: 10px;">
                <b-button type="submit" variant="primary"><i class="fa-solid fa-plus"></i> Cadastrar</b-button>
                <!-- <router-link to="/">
                    <b-button class="mx-2" variant="danger"><i class="fa-solid fa-house"></i> Voltar</b-button>
                </router-link> -->
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

export default {
    data() {
    return {
        cliente: null,
        clientOptions: [],
        optionsRecebimento: [
            { item: 'Pendente', name: 'Pendente' },
            { item: 'Recebido', name: 'Recebido' },
        ],
        form: {
            descricao: '',
            nomeCliente: '',
            tipoCliente: '',
            dataVencimento: '',
            statusRecebimento: '',
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
  mounted() {
    this.fetchClients();
  },
  methods: {
    async fetchClients() {
      try {
        const response = await axios.get('/api/clients');
        
        this.clientOptions = response.data.map(client => ({ id: client.id, nome: client.nome, tipo: client.clienteFornecedor }));

        console.log(this.clientOptions);

      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    },
    async onSubmit(event) {
        try {
            event.preventDefault();
            console.log("TEST");

            this.form.nomeCliente = this.form.nomeCliente.nome;
            console.log("A", this.form.nomeCliente);

            const clienteSelecionado = this.clientOptions.find(cliente => cliente.nome === this.form.nomeCliente);
            console.log(clienteSelecionado);
            this.form.tipoCliente = clienteSelecionado.tipo;

            const response = await axios.post('api/contasreceber', this.form);

            console.log(response);
            //event.preventDefault();
            alert("Dados salvos com sucesso.");
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