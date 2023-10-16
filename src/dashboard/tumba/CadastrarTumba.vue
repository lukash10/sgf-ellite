<template>
    
 
<div class="d-flex">


    <main>

        <header> 
            <h4 class="color-main"><i class="fa-solid fa-cross"></i> Cadastrar Tumba</h4>
        </header>

        <form style="margin: 15px;padding: 15px;border-radius: 5px;" class="form-lks mt-5" @submit="onSubmit" @reset="onReset">
        
        
            <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">

                <div class="container-fluid">
                    <div class="card card-4">
                        <div class="card-body">

                            <b-alert show style="text-align: center;font-weight: bold;">Novo Registro</b-alert>
                            
                            <form class="">

                                <div class="py-2 mb-4">
                                    <b-form-group label="Possui algum parente cadastrado?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="radio-group-1"
                                            v-model="selected1"
                                            :options="options1"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-options"
                                        ></b-form-radio-group>
                                    </b-form-group>
                                </div>

                                <div v-if="selected1 == 'nao'"  class="wrapper mb-3">
                                    <b-form-group label="Selecione a quadra e a tumba desejada:">
                                        <b-form-select style="padding-left:10px" v-model="selected" :options="options"></b-form-select>
                                    </b-form-group>
                                </div>

                                <div v-if="selected1 == 'sim'" >
                                    <b-form-input style="border: 1px solid #ced4da !important;" v-model="text" placeholder="Digite o CPF do parente desejado para procurar a Quadra e Tumba específica"></b-form-input>
                                </div>

                                <div v-if="selected == 'pequeno'" class="row shadow-sm p-2 m-1">

                                    <div class="row">
                                        <div class="col-6 mx-2">
                                            <div class="input-group">
                                                <label class="label">1. Nome Completo</label>
                                                <input class="input--style-4" v-model="nome1" type="text" name="first_name">
                                            </div>
                                        </div>

                                        <div class="col-3 mx-2">
                                            <div class="input-group">
                                                <label class="label">CPF</label>
                                                <input class="input--style-4" v-model="cpf1" type="text" name="cpf" placeholder="_________-__" v-mask="'###.###.###-##' ">
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Matrícula de Óbito</label>
                                                <input class="input--style-4" v-model="rg1" type="text" name="rg" id="rgInput" placeholder="____-___" v-mask="'####-###' "> 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6 mx-2">
                                            <div class="input-group">
                                                <label class="label">2. Nome Completo</label>
                                                <input class="input--style-4" v-model="nome2" type="text" name="first_name">
                                            </div>
                                        </div>

                                        <div class="col-3 mx-2">
                                            <div class="input-group">
                                                <label class="label">CPF</label>
                                                <input class="input--style-4" v-model="cpf2" type="text" name="cpf" placeholder="_________-__" v-mask="'###.###.###-##' ">
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Matrícula de Óbito</label>
                                                <input class="input--style-4" v-model="rg2" type="text" name="rg" id="rgInput" placeholder="____-___" v-mask="'####-###' "> 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6 mx-2">
                                            <div class="input-group">
                                                <label class="label">3. Nome Completo</label>
                                                <input class="input--style-4" v-model="nome3" type="text" name="first_name">
                                            </div>
                                        </div>

                                        <div class="col-3 mx-2">
                                            <div class="input-group">
                                                <label class="label">CPF</label>
                                                <input class="input--style-4" v-model="cpf3" type="text" name="cpf" placeholder="_________-__" v-mask="'###.###.###-##' ">
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Matrícula de Óbito</label>
                                                <input class="input--style-4" v-model="rg3" type="text" name="rg" id="rgInput" placeholder="____-___" v-mask="'####-###' "> 
                                            </div>
                                        </div>

                                        <div class="input-group">
                                            <label class="label">Data de Inserção do Registro</label>
                                            <input class="input--style-4" v-model="dataInsercao" type="text" name="dataInsercao" id="dataInsercaoInput"> 
                                        </div>

                                    </div>

                                </div>

                                <div v-if="selected == 'grande'" class="row shadow-sm p-2 m-1">

                                    <div class="row">
                                        <div class="col-6 mx-2">
                                            <div class="input-group">
                                                <label class="label">1. Nome Completo</label>
                                                <input class="input--style-4" v-model="nome4" type="text" name="first_name">
                                            </div>
                                        </div>

                                        <div class="col-3 mx-2">
                                            <div class="input-group">
                                                <label class="label">CPF</label>
                                                <input class="input--style-4" v-model="cpf4" type="text" name="cpf" placeholder="_________-__" v-mask="'###.###.###-##' ">
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Matrícula de Óbito</label>
                                                <input class="input--style-4" v-model="rg4" type="text" name="rg" id="rgInput" placeholder="____-___" v-mask="'####-###' "> 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6 mx-2">
                                            <div class="input-group">
                                                <label class="label">2. Nome Completo</label>
                                                <input class="input--style-4" v-model="nome5" type="text" name="first_name">
                                            </div>
                                        </div>

                                        <div class="col-3 mx-2">
                                            <div class="input-group">
                                                <label class="label">CPF</label>
                                                <input class="input--style-4" v-model="cpf5" type="text" name="cpf" placeholder="_________-__" v-mask="'###.###.###-##' ">
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Matrícula de Óbito</label>
                                                <input class="input--style-4" v-model="rg5" type="text" name="rg" id="rgInput" placeholder="____-___" v-mask="'####-###' "> 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6 mx-2">
                                            <div class="input-group">
                                                <label class="label">3. Nome Completo</label>
                                                <input class="input--style-4" v-model="nome6" type="text" name="first_name">
                                            </div>
                                        </div>

                                        <div class="col-3 mx-2">
                                            <div class="input-group">
                                                <label class="label">CPF</label>
                                                <input class="input--style-4" v-model="cpf6" type="text" name="cpf" placeholder="_________-__" v-mask="'###.###.###-##' ">
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Matrícula de Óbito</label>
                                                <input class="input--style-4" v-model="rg6" type="text" name="rg" id="rgInput" placeholder="____-___" v-mask="'####-###' "> 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6 mx-2">
                                            <div class="input-group">
                                                <label class="label">4. Nome Completo</label>
                                                <input class="input--style-4" v-model="nome7" type="text" name="first_name">
                                            </div>
                                        </div>

                                        <div class="col-3 mx-2">
                                            <div class="input-group">
                                                <label class="label">CPF</label>
                                                <input class="input--style-4" v-model="cpf7" type="text" name="cpf" placeholder="_________-__" v-mask="'###.###.###-##' ">
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Matrícula de Óbito</label>
                                                <input class="input--style-4" v-model="rg7" type="text" name="rg" id="rgInput" placeholder="____-___" v-mask="'####-###' "> 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6 mx-2">
                                            <div class="input-group">
                                                <label class="label">5. Nome Completo</label>
                                                <input class="input--style-4" v-model="nome8" type="text" name="first_name">
                                            </div>
                                        </div>

                                        <div class="col-3 mx-2">
                                            <div class="input-group">
                                                <label class="label">CPF</label>
                                                <input class="input--style-4" v-model="cpf8" type="text" name="cpf" placeholder="_________-__" v-mask="'###.###.###-##' ">
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Matrícula de Óbito</label>
                                                <input class="input--style-4" v-model="rg8" type="text" name="rg" id="rgInput" placeholder="____-___" v-mask="'####-###' "> 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="input-group">
                                        <label class="label">Data de Inserção do Registro</label>
                                        <input class="input--style-4" v-model="dataInsercao" type="text" name="dataInsercao" id="dataInsercaoInput"> 
                                    </div>


                                    </div>

                                
                                <div class="p-t-15">
                                    <button class="btn btn--radius-2 btn--blue" type="submit"><router-link to="/" style="color:white;text-decoration: none;">Atualizar Registro</router-link></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        
        </form>

    </main>

</div>



   

</template>


<script>

import VueMask from 'v-mask';
//import Multiselect from 'vue-multiselect';
import { VueEditor } from "vue2-editor";
import axios from 'axios';

export default {

  components: {
    VueEditor,
    //Multiselect
  },
    data() {
        return {
            text: null,
            selected1: null,
            options1: [
                { value: 'sim', text: 'Sim' },
                { value: 'nao', text: 'Não' },
            ],
            selected: null,
            options: [
                { value: null, text: 'Por favor selecione uma opção' },
                { value: 'pequeno', text: 'Quadra 1 | Tumba 1' },
                { value: 'grande', text: 'Quadra 2 | Tumba 2' },
                { value: 'pequeno', text: 'Quadra 3 | Tumba 3' },
                { value: 'grande', text: 'Quadra 4 | Tumba 4' },
                { value: 'pequeno', text: 'Quadra 5 | Tumba 5' },
                { value: 'grande', text: 'Quadra 6 | Tumba 6' },
            ],
            loaded: false,
            mode: "ADD",
            nome: '',
            rg: '',
            cpf: '',
            nome2: '',
            rg2: '',
            cpf2: '',
            dataInsercao: ''
        }
    },
    
    async mounted(){
        
        const dataAtual = new Date();
        const ano = dataAtual.getFullYear();
        const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // +1 porque os meses são baseados em zero
        const dia = dataAtual.getDate().toString().padStart(2, '0');
        this.dataInsercao = `${dia}/${mes}/${ano}`;
        
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault();

            if(this.mode == "ADD"){
                await axios.post('/api/post', this.form, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
                alert('Post Cadastrado com Sucesso.');
            }else{
                await axios.put(`/api/post/${this.form.id}`, this.form, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }});
                alert('Post Atualizado com Sucesso.');
            }

            this.$router.push('/listarnoticia');  
        },
        onReset(event) {
            event.preventDefault()
            
        },
        onFileUpload() {
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            this.loaded = false;
                      
            if (this.mode == 'EDIT') {
                this.imageUpdated = true;
            }

            reader.onloadend = () => {
                this.form.image = reader.result;
                this.loaded = true;
            }

            reader.readAsDataURL(file);
        }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

body{
    height: auto !important;
}

main{
    width: 100%;
    height: 100%;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

header{
    height: 110px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 26%) 19px 0px 23px 1px;
}

fieldset {
  min-width: 0;
  /* [1] */
  border: 0;
}

button {
  outline: none;
  background: none;
  border: none;
}

.page-wrapper {
  min-height: 100vh;
}

.p-t-15 {
  padding-top: 15px;
}

.p-b-100 {
  padding-bottom: 100px;
}

.btn {
  display: inline-block;
  line-height: 40px;
  padding: 0 30px;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  font-family: "Poppins", "Arial", "Helvetica Neue", sans-serif;
}

.btn--radius-2 {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.btn--blue {
  background: #4272d7;
}
.btn--blue:hover {
  background: #3868cd;
}

input[type="date" i] {
  padding: 14px;
}


input {
  outline: none;
  margin: 0;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
}

.input--style-4 {
  line-height: 50px;
  background: #fafafa;
  -webkit-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.input--style-4::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #666;
}

.input--style-4:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #666;
  opacity: 1;
}

.input--style-4::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #666;
  opacity: 1;
}

.input--style-4:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #666;
}

.input--style-4:-ms-input-placeholder {
  /* Microsoft Edge */
  color: #666;
}

.input-group {
  position: relative;
  margin-bottom: 22px;
}

.title {
  font-size: 24px;
  color: #525252;
  font-weight: 400;
  margin-bottom: 40px;
}

/* ==========================================================================
   #CARD
   ========================================================================== */
.card {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #fff;
}

.card-4 {
  background: #fff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
}

.card-4 .card-body {
  padding: 57px 65px;
  padding-bottom: 65px;
}

@media (max-width: 767px) {
  .card-4 .card-body {
    padding: 50px 40px;
  }
}

</style>
