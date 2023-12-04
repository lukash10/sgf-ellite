<template>

<body>

  <Sidebar></Sidebar>
  
  <main id="content" style="display: flex;align-items: center;justify-content: center;">
    <h2 style="margin:auto">ADADADADADADADADaaa</h2>
  </main>

</body>


</template>

<script>

import Sidebar from "../dashboard/Menu.vue";

export default {
  data: () => ({
    //
  }),
  components: {
    Sidebar
  },
  mounted() {
    
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
