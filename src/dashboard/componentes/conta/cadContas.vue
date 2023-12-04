<template>

<body>

<Sidebar style="display: ;"></Sidebar>
    
<main id="content" class="m-2 p-3" style="display: flex;align-items: center;flex-direction: column;">
    
   
    <form @submit="onSubmit" class="w-100 shadow-sm" style="border:1px solid rgb(206, 206, 206); border-radius:5px;padding: 30px">
        <h3 class="text-center mb-4">Cadastro de Contas</h3>
        <div class="container-fluid">

            <div class="row">
                <div class="col-12">
                    <div class="form-floating mb-3">
                        <input v-model="form.descricao" type="text" class="form-control" id="floatingCategoria" placeholder="Categoria">
                        <label for="floatingCategoria"><i class="fa-solid fa-signature"></i> Descrição da Categoria</label>
                     </div>
                </div>

                <div class="col-12 mb-2">

                    <div style="border:1px solid rgb(206, 206, 206); border-radius:5px;padding:10px ;">
                        <b-form-group label="Tipo da Conta"></b-form-group>
                        <b-form-radio-group 
                            v-model="form.tipoConta"
                            :options="optionsConta"
                            class="mb-3"
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                        ></b-form-radio-group>
                    </div>

                </div>

                <div class="col-12 mb-2">
                    <div style="border:1px solid rgb(206, 206, 206); border-radius:5px;padding:10px ;">
                        <b-form-group label="Tipo da Despesa"></b-form-group>
                        <b-form-radio-group 
                            v-model="form.tipoDespesa"
                            :options="optionsDespesa"
                            class="mb-3"
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                        ></b-form-radio-group>
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
        form: {
            descricao: '',
            tipoConta: '',
            tipoDespesa: '',
        },
        optionsConta: [
            { item: 'Receita', name: 'Receita' },
            { item: 'Despesa', name: 'Despesa' },
        ],
        optionsDespesa: [
            { item: 'Variável', name: 'Variável' },
            { item: 'Fixo', name: 'Fixo' },
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
            const response = await axios.post('api/contas', this.form);
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