<template>

  <div class="preloader text-center">
     
    <div class="fade-in-image">
      <img src="/studio.png">
    </div>
          
  </div>

</template>



<style>

.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh !important;
  background-color: white;
  z-index: 9999; 
  transition-duration: 3s;
}

.fade-in-image { animation: fadeIn 5s; }

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

</style>