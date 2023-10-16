<template>

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero mt-5" style="margin-top:70px !important">

    <div class="container-fluid">

      <div class="row">
        
        <div class="col-lg-12 d-flex mt-5" style="text-align:center;flex-direction:column;justify-content:center; align-items: center;padding:0px !important;animation: fadeIn 3s ease-in;">
        
          <div>
            <img id="logoInit" style="width:400px" src="/Logo Agro.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100">
          </div>
        </div>

        <div id="minHeightInit" class="col-lg-12" style="animation: fadeIn 4s ease-in;padding:10px;justify-content:center; align-items: center;text-align:center;min-height: 520px;">
          
          <div class="row">

            <div id="divcallInit" class="col-12 d-flex" style="padding-left: 200px;">
              <a id="callInit" class="mt-4" style="text-align: left;color:#005641 !important;font-weight:700;font-size: 50px;line-height: 51px;">Consultoria <br>Especializada <br>no Agronegócio</a>
            </div>
            
            <div id="divcall2Init" class="col-12 d-flex mt-3" style="padding-left: 200px;">
              <p id="call2Init" style="text-align: justify;font-weight: 500;color:white;font-size: 28px;line-height: 30px;">São mais de 16 serviços disponíveis para<br>auxiliar no gerenciamento, inovação e <br>aumento da rentabilidade dos negócios rurais.</p>
            </div>

            <div id="buttonInit" class="col-12 d-flex" style="padding-left: 200px;">
              <a href="#servicos"><button class="btn" style="background-color:#005641;color:white;border-radius: 20px;">Saiba Mais</button></a>
            </div>

          </div>

        </div>

      </div>
      <!-- <div class="row gy-5" data-aos="fade-in">
        
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2 style="color:#005744">Bem vindo a 
            <span>
              <div>
                <img style="width:50%" src="/Logo Agro.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100">
              </div>
              
            </span>
          </h2>
          <h4 style="color:#FFF">"Aqui você encontra a solução para seus problemas".</h4>

        </div>

        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          
          <div style="display:flex;justify-content: flex-end;">
            <b-card title="Subvenção do ICMS para Investimentos" img-src="/reducao.png" img-alt="Image" img-top tag="article" style="background: #00000063;display:flex;max-width: 28rem;color:white;" class="mb-2">
              <b-card-text class="mt-3 mb-3" style="text-align: ;color:white;font-weight:600;font-size:18px">
                Foi pautada pelo Supremo Tribunal de Justiça para o dia 26 de março o julgamento da tese de Subvenção do ICMS para investimentos...
              </b-card-text>
              <b-button href="#" style="background-color:#005744"><span style="color:white">Saiba Mais <b-icon style="padding-top:10px" icon="three-dots" animation="cylon" font-scale="1"></b-icon></span></b-button>
            </b-card>
          </div>
        </div>

    
      </div> -->

      <!-- <video id="background-video" autoplay loop muted>
        <source src="/studio_agro.mp4" type="video/mp4">
        Seu navegador não suporta a reprodução de vídeos em HTML5.
      </video> -->

      <!-- <img id="family" src="/family.png"> -->

    </div>


  </section>

</template>


<script>

export default {
  data() {
    return {
      
    }
  },
  mounted(){

    // window.addEventListener('resize', resizeVideo);

    // function resizeVideo() {

    //   console.log("RESIZED");

    //   var video = document.getElementById('background-video');
    //   var container = document.getElementById('hero');
    //   var videoRatio = video.videoWidth / video.videoHeight;
    //   var containerRatio = container.offsetWidth / container.offsetHeight;

    //   if (containerRatio > videoRatio) {
    //     video.style.width = '100%';
    //     video.style.height = 'auto';
    //   } else {
    //     video.style.width = 'auto';
    //     video.style.height = '100%';
    //   }
    // }

    // // Chamar a função de redimensionamento do vídeo no carregamento da página
    // window.addEventListener('DOMContentLoaded', resizeVideo);
    
  },
  
  

  
}


</script>

<style scoped>

#hero {
    position: relative;
    overflow: hidden;
    background-image: url('../../public/image_hero2.png');
    background-size: cover;
  }


  #hero video {
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }


.hero h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
}

.hero p {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  margin-bottom: 30px;
}

@media only screen and (max-width: 600px) {

#minHeightInit{
  min-height: 500px !important;
}  

#logoInit{
  width:300px !important;
}

#divcallInit{
  padding-left:60px!important;
  
}

#callInit{
  padding: 0 !important;
  font-size: 40px !important;
}

#divcall2Init{
  padding-left:0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

#call2Init{
  font-size:16px !important;
  padding-left: 18px !important;
  margin-top: 25px !important;
  text-align: center !important;
  color:white !important; 
}

#buttonInit{
  padding-left: 0px !important;
  display: flex;
  justify-content: center;
}




}

@keyframes fadeIn {  
   from {  
       opacity:0;  
   }  

   to {  
       opacity:1;  
   }  
}



</style>