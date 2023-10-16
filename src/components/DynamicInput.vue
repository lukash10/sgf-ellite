<template>

    <div class="mt-3 mb-3" style="border: 1px solid #d2d2d2;border-radius: 10px;margin: 0px;padding:20px">

        <button type="button" class="btn btn-secondary mt-2 mb-2" @click="addMore()">
          Adicionar Novo Polo
        </button>
        <br>
        <small class="mt-2 mb-3"> <b>Adicione o Polo, o link e seu respectivo valor.</b></small>
        
        <div class="mt-2" v-for="(pole, index) in poles" :key="index">

          
          <div class="container" style="border:1px solid green; padding: 10px; border-radius:5px">
            <div class="row">
              <div class="col">
                <b-form-select v-model="pole.id" class="mx-1 w-45" :options="options" style="border: 1px solid #c6c6c6;border-radius:5px; padding:10px;"></b-form-select>
                <input v-model="pole.linkCourse" placeholder="Digite o link do Polo selecionado ..." class="w-50" style="border: 1px solid #c6c6c6;border-radius:5px; padding:10px"/>
              </div>
              <div class="col">
                <input v-model="pole.monthlyPayment"  placeholder="Valor da mensalidade ..." class="w-50" style="border: 1px solid #c6c6c6;border-radius:5px; padding:10px"/>
                <input v-model="pole.registrationPayment" placeholder="Valor da matrícula ..." class="w-50" style="border: 1px solid #c6c6c6;border-radius:5px; padding:10px"/>
              </div>
            </div>
          </div>
          
          <button type="button" class="btn btn-danger mx-1" @click="remove(index)" v-show="index != 0">
                    Remover Polo
          </button>

        </div>

    </div>

</template>

<script>

import axios from "axios";

export default {
  props: {
    poles: Array,
  },
  data() {
    return {
        options:[]
    };
  },

  async mounted() {

    await this.getPoles();
    this.poles.push(
            {id: this.options[0].value, linkCourse: ""}
    );
    // console.log(this.poles);

  },
  methods: {

    async getPoles(){

        const response = await axios.get('/api/poles', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }} );
        
    
        this.options = response.data.map( (p) => {
            return {value: p.id, text: p.name, disabled: false}
        });

        

    },
    addMore() {

      this.poles.push(
          {id: "", linkCourse: ""}
      );
        // console.log("This Options", this.options);
        // console.log("Poles", this.poles);
      this.atualizarOptions();

        
        
    },
    remove(index) {

      
      this.poles.splice(index, 1);
      this.atualizarOptions();

    },
    atualizarOptions(){

      this.options = this.options.map ( (option) => {
        
        const a = this.poles.map( (p) =>{
          return p.id;
        });

        if ( a.includes(option.value) ){
          option.disabled = true;
        }else{
          option.disabled = false;
        }

        // console.log("Option ", option);
        return option;
      
        });
    }
  },
};
</script>

