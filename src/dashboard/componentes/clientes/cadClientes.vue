<template>

<body>

<Sidebar style="display: ;"></Sidebar>
    
<main id="content" class="m-2 p-3" style="display: flex;align-items: center;flex-direction: column;">
    
   
    <form @submit="onSubmit" class="w-100 shadow-sm" style="border:1px solid rgb(206, 206, 206); border-radius:5px;padding: 30px">
        <h3 class="text-center mb-4">Cadastro de Clientes</h3>
        <div class="container-fluid">

            <div class="row">
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input v-model="form.nome" type="text" class="form-control" id="floatingName" placeholder="Nome">
                        <label for="floatingName"><i class="fa-solid fa-signature"></i> Nome</label>
                     </div>
                </div>

                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input v-model="form.cpf" type="text" v-mask="'###.###.###-##'" class="form-control" id="floatingCPF" placeholder="CPF">
                        <label for="floatingCPF"><i class="fa-solid fa-arrow-up-1-9"></i> CPF</label>
                    </div>
                </div>

                <div class="contato">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-floating mb-3">
                                <select class="form-select" v-model="selectedContactType" aria-label="Tipo de Contato">
                                <option value="telefone">Telefone</option>
                                <option value="celular">Celular</option>
                                </select>
                                <label for="contactType"><i class="fa-solid fa-address-book"></i> Selecione o tipo de Contato</label>
                            </div>       
                        </div>

                        <div class="col-6">
                            <div v-if="selectedContactType === 'telefone'" class="form-floating mb-3">
                                <input v-model="form.telefone" type="text" class="form-control" v-mask="'(##).####-####'" id="contactNumber" placeholder="Número de Telefone">
                                <label for="contactNumber"><i class="fa-solid fa-phone"></i> Número de Telefone</label>
                            </div>
                            <div v-if="selectedContactType === 'celular'" class="form-floating mb-3">
                                <input v-model="form.celular" type="text" v-mask="'(##)#.####-####'" class="form-control" id="contactNumber" placeholder="Número de Celular">
                                <label for="contactNumber"><i class="fa-brands fa-whatsapp"></i> Número de Celular</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 mb-2">

                    <div style="border:1px solid rgb(206, 206, 206); border-radius:5px;padding:10px ;">
                        <b-form-group label="Tipo Cliente"></b-form-group>
                        <b-form-radio-group 
                            v-model="form.clienteFornecedor"
                            :options="options"
                            class="mb-3"
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                        ></b-form-radio-group>
                    </div>

                </div>

                <div class="col-12">
                    <div class="form-floating mb-3">
                        <input v-model="form.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput"><i class="fa-solid fa-square-envelope"></i> E-mail</label>
                    </div>

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
import { VueMaskDirective } from 'v-mask';
import Sidebar from "../../Menu.vue";
import axios from 'axios';
export default {
    data() {
    return {
        selectedContactType: 'celular',
        form: {
        nome: '',
        cpf: '',
        telefone: '',
        celular: '',
        email: '',
        clienteFornecedor: '',
        },
        options: [
            { item: 'Cliente', name: 'Cliente' },
            { item: 'Fornecedor', name: 'Fornecedor' },
        ]
    };
  },
  directives: {
    mask: VueMaskDirective, // Registre a diretiva no componente
  },
  components: {
    Sidebar
  },
  mounted() {
    
  },
  methods: {

    async onSubmit(event) {
        try {
            event.preventDefault();
            console.log("TEST");
            const response = await axios.post('api/clients', this.form);
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