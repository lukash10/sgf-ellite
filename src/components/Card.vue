<template>

  <div class="col">

    <div class="card" style="border:none;width: 100% !important">
      
      <div class="image-wrapper">
        <img style="width: 500px !important; height: 250px !important" :src="'/images_uploaded/course/' + course.image"/>
      </div>

      <div class="card-description">

        <a @click="openModal(course.id)" class="mb-2">
            <h5 class="mt-1 card-title" style="color: #008360">{{course.name}}</h5>
        </a>

        <div v-if="course.modality == '!EXT' ">

          <p class="card-text mb-0"><small>Mensalidades a partir de </small><b>{{course.monthlyPayment}}</b> </p>
          <p class="card-text"><small>Duração do Curso: </small><b>{{course.duration}} meses</b><b>Curso Online</b></p>

        </div>

        <div v-else>

          <p class="mt-2 card-text mb-0"><small><i style="color: #008360;" class="fa-regular fa-clock"></i> Duração do Curso: </small><b>{{course.duration}} meses</b></p>
          <b><small><i style="color: #008360;" class="fa-solid fa-school"></i> Curso Presencial</small></b>

          <h5 class="mt-3 card-text"><i style="color: #008360;" class="fa-regular fa-money-bill-1-wave"></i> Investimento de apenas: <b>{{course.value}}</b> </h5>
        </div>

        <div class="mt-3 d-flex" style="width:200px;">
        
          <a type="button" @click="openModal(course.id)" style="border-radius: 3px;padding: 8px;border: 1px solid #d1d1d1;color: #008360 !important;" >
              <b-icon icon="book" animation="fade" font-scale="1"></b-icon>
              <span style="font-weight:600"> Saiba Mais</span>
          </a>

        </div>

      </div>

    </div>

      
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "GraduacaoPresencial",

  props: {
    course: Object,

  },
  data() {
    return {
      selected1: {},
      options: [
        { value: { nome: "a", link: "#" }, text: "Selecione um polo" },
        {
          value: { nome: "Barra do Garças", link: "http://google.com.br" },
          text: "Barra do Garças",
        },
        {
          value: { nome: "Feira de Santana", link: "http://yahoo.com.br" },
          text: "Feira de Santana",
        },
      ],
    };
  },
  components: {
    carousel,
  },
  mounted() {
    this.selected1 = this.options[0].value;
  },
  methods:{

    openModal(idCourse) {
      this.$emit("openModal", idCourse)
    }

  }
}
</script>

<style>

.button-lks {
  flex-direction: column;
}

.btn-cat {
  background-color: #008360 !important;
  color: white !important;
}
</style>
