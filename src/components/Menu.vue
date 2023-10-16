<template>

<nav class="navbar navbar-toggler fixed-top navbar-expand-lg" style="height:70px;z-index: 11 !important;background: white !important;border-radius: 0px 0px 10px 10px;">

<div class="container-fluid" style="padding-left: 30px;padding-right: 30px;">

  <div class="col-3 d-flex menu-mobile">
   <a class="navbar-brand" href="#"> <router-link to="/"><img alt="logo" class="text-center" src="/Logo Agro.png" width="190px"></router-link></a>

    <b-button class="mobile-only" v-b-toggle.sidebar-backdrop style="background-color: rgb(49 49 49);border: none;">
      <template>
        <i class="fa-solid fa-bars fa-xl"></i>
      </template>
    </b-button>


    <!-- MENU LATERAL - MOBILE -->
    <b-sidebar id="sidebar-backdrop" aria-control="lks" title="Studio Agro" backdrop shadow>


      <div class="p-3">

        <div class="d-flex py-2 row" style="justify-content:center;align-items: center;">
          <div class="col-8"> <img alt="logo" class="text-center" src="/studio.png" width="100%">
          </div>
        </div>

        <hr style="color: white;">

        <nav class="mb-3">
          <b-nav class="" vertical>

            <div class="d-flex" style="justify-content:center">
              <hr class="text-center" style="width:60%">
            </div>

            <b-button v-b-toggle="'collapse-0'" style="text-align: inherit;background: #008360;border: none;" class="m-1"><i class="fa-solid fa-user-graduate px-1"> </i>Área do Franqueado <b-icon icon="arrow-down-circle" shift-v="-1" animation="cylon-vertical" font-scale="1"></b-icon></b-button>
          
            <div class="d-flex" style="justify-content:center">
              <hr class="text-center" style="width:60%">
            </div>

            <!-- <b-button v-b-toggle="'collapse-4'" style="text-align: inherit;background: #008360;border: none;" class="m-1"><i class="fa-solid fa-building px-1"> </i>Institucional <b-icon icon="arrow-down-circle" shift-v="-1" animation="cylon-vertical" font-scale="1"></b-icon></b-button>

            <b-collapse id="collapse-4">
              <router-link id="rl" class="px-2" to="/historia" style="color:#313131"><button id="menu_mob" style="font-size: initial;background: none;border: none;height: 35px;color: white;" class="mb-2"><i class="fa-solid fa-laptop-file px-1"></i>Nossa História</button></router-link>
              <router-link id="rl" class="px-2" to="/quemsomos" style="color:#313131"><button id="menu_mob" style="font-size: initial;background: none;border: none;height: 35px;color: white;" class="mb-2"><i class="fa-solid fa-laptop-file px-1"></i>Quem Somos</button></router-link>
              <router-link id="rl" class="px-2" to="/responsabilidade" style="color:#313131"><button id="menu_mob" style="font-size: initial;background: none;border: none;height: 35px;color: white;" class="mb-2"><i class="fa-solid fa-laptop-file px-1"></i>Responsabilidade Social</button></router-link>  
            </b-collapse> -->


            <div class="d-flex" style="justify-content:center">
              <hr class="text-center" style="width:60%">
            </div>

          </b-nav>

        </nav>

      </div>
    </b-sidebar>
  </div>

  <div class="col-9 d-flex pc-only" style="justify-content: flex-end;padding-top: 10px;">

    <li class="dropdown">
      <a style="color:#005641 !important;font-weight: 500;" href="#" class="dropbtn"><i class="fa-solid fa-house"></i> Início <i class="fa-solid fa-arrow-down fa-xs pulsate"></i></a>
      <div class="dropdown-content">
        <a href=".">Página Inicial</a>
        <a href="#servicos">Serviços</a>
        <a href="#canal">Canal Studio</a>
        <a href="#tour">Tour Studio</a>
        <a href="#recent-posts">Destaques</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contato</a>
      </div>
    </li>

    <li>
      <ul><router-link to="/noticiasmain" style="color:#005641 !important;font-weight: 500;"><i class="fa-solid fa-newspaper"></i> Blog</router-link></ul>
    </li>

    <li>
      <ul><router-link to="/franqueado" style="color:#005641 !important;font-weight: 500;"><i class="fa-solid fa-user"></i> Área do Franqueado</router-link></ul>
    </li>

    <li>
      <ul><router-link to="/sejafranqueado" style="color:#005641 !important;font-weight: 500;"><i class="fa-solid fa-user-plus"></i> Seja um Franqueado</router-link></ul>
    </li>
        
    
  </div>

</div>

</nav>


</template>

<script>

import AddPWA from ".././components/pwa/AddPWA.vue";
import carousel from 'vue-owl-carousel';

export default {
  data() {
    return {
      //
    }
  },
  components:{
    AddPWA,
    carousel
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}


 


</script>

<style>

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  font-size: smaller;
  left: -25px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#rl{
  width: 100% !important;
  display: flex;
}

#rl:hover{
  background: #494949;
  border-radius: 10px;
}

#dropdown-10{
  border: 1px solid #c4c4c4;
  border-radius: 5px;
}

#dropdown-10:hover{
  background: #198754;
}

#dropdown-11{
  border: 1px solid #c4c4c4;
  border-radius: 5px;
}

#dropdown-11 button {
  background: none;
  border: none;
  color: white;
}

#dropdown-10 button {
  background: none;
  border: none;
  color: rgb(43, 43, 43);
}

#dropdown-10 button:hover{
  color:white;
}

.dropdown-item.active, .dropdown-item:active {
    text-decoration: none;
    background-color: #008360 !important;
}

li[role='presentation']{
  padding-bottom: 5px;
  border-bottom: 1px solid antiquewhite;
}

.b-sidebar-footer > div{
  margin-bottom:60px;
}

.modal-footer>button {
  background: #198754;
  display: none;
}

.modal-footer>button:active,
button:focus-visible {
  background: green !important;
  box-shadow: none !important;
  border-color: white !important;
}

.modal-header>button {
  border-color: #ffffff00;
  background: #198754;
  border-radius: 10px;
  color: white !important;
  height: 40px;
  width: 40px;

}

.color-white {
  color: white !important;
}


.lkss {
  background: #008360;
  border: none;
}

.lkss>router-link {
  color: white;
}

/* :not(.btn-check)+.btn:hover,
.btn:first-child:hover {
  /* color: #fff;
  background-color: #313131;
  border-color: #ffffff; 
} */


@media only screen and (max-width:1160px) {

  .menu-mobile {
    justify-content: space-between;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0px;
  }

  .mobile-only {
    display: block !important;
  }

  .acess {
    display: none !important;
  }

  #wh {
    display: none !important;
  }

  .top-menu {
    display: none !important;
  }

  .pc-only {
    display: none !important;
  }
}

/* //NORMAL// */

.mobile-only {
  display: none;
}

.pc-only {
  display: flex;
}



* {
  text-decoration: none;
  list-style: none;
}

a {
  color: rgb(37, 37, 37) !important;
  text-decoration: none !important;

}

.top-menu ul li {
  padding-right: 20px;
  white-space: nowrap;
  font-weight: 550;
}

.b-sidebar>.b-sidebar-header .close {
  border-color: #ffffff00;
  background: #008360;
  border-radius: 10px;
  color: white !important;
  height: 40px;
  width: 40px;
}

.b-sidebar>.b-sidebar-body {
  background-color: #313131;
}

strong#sidebar-backdrop___title__ {
  color: #008360;
  font-weight: 500;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.pulsate {
  position: relative;
}

.pulsate {
  display: inline-block;
  animation: pulsate 1s ease-in-out infinite;
}

</style>