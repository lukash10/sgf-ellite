<template>

<!-- https://vue-bottom-navigation.netlify.app/ -->
<!-- https://vue-bottom-navigation.herokuapp.com/guide/curved -->

<!-- Always visible Sticky Bottom Nav-->
<div id="lukash-bottom">
 
  <CurvedBottomNavigation
  foreground-color='#FFFFFF'
  badge-color='black'
  background-color='#005641'
  icon-color='#FFFFFF'
  :options="options" v-model="selected">
  </CurvedBottomNavigation>

</div>



</template>

<script>
  import { CurvedBottomNavigation } from "bottom-navigation-vue";

  export default {
    components: { CurvedBottomNavigation },
    data: () => ({
      selected: 1,
      options: [
        {
          id: 1,
          icon: "fas fa-home fa-lg fa-lg",
          title: "Página Inicial",
          path: {name: "HomePage"},
          childs: 
          [{ id: 101, icon: "fas fa-home fa-lg fa-lg", path: {name: "HomePage"}, } ],
        },
        { 
          id: 2, 
          icon: "fas fa-user-tie fa-lg", 
          title: "Área do Franqueado",
          path: {name: "Franqueado"},
          childs: 
          [{ id: 201, icon: "fas fa-user fa-lg", path: {name: "Franqueado"}, } ],
        },
        {
          id: 3,
          icon: "fas fa-user fa-lg",
          title: "Área do Cliente",
          childs: 
          [{ id: 301, icon: "fas fa-user fa-lg", path: {name: "Portal Acadêmico"}, } ],
        },
        {
          id: 4,
          icon: "fab fa-whatsapp fa-xl",
          title: "WhatsApp",
          path: {name: "Whatsapp"},
          childs: 
          [{ id: 401, icon: "fab fa-whatsapp fa-xl", path: {name: "Whatsapp"}, } ],
        },
      ],
    })
  };
</script>

<style scoped>

.stickyBottomNav {
   position: fixed;
   left: 0;
   right: 0 !important;
   bottom: 0;
   max-width: 100%;
   z-index: 5;
   background-color: red;
   color: white;
   text-align: center;
}
</style>