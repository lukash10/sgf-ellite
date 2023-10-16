<template>

  <div class="">
    <!-- style="background-image:url('wave.svg');padding-top: 300px;background-size: cover;background-repeat: no-repeat;" -->
    <div class="footer" >

      <div class="container ">
        <div class="pc-only row mt-5 mb-5 text-center" style="display:flex;padding-top:0px;text-align: center;">

          <section id="footer">
            <div class="container">
              <div class="row text-center text-xs-center text-sm-left text-md-left">
                <div class="col-xs-12 col-sm-4 col-md-4">
                  <img src="/Logo Agro.png" style="width:200px">
                  <ul class="list-unstyled quick-links mt-4">
                    <li>Nossa essência é reduzir custos e aumentar o resultado financeiro das empresas através de soluções corporativas inteligentes.</li>
                    <li class="mt-3">
                      <a style="color:white !important" href="https://www.facebook.com/studioagrooficial/" target="_blank"> <i class="fa-brands fa-facebook fa-2xl px-2"></i> </a>
                      <a style="color:white !important" href="https://www.instagram.com/studioagro/" target="_blank"> <i class="fa-brands fa-instagram fa-2xl px-2"></i> </a>
                      <a style="color:white !important" href="https://www.linkedin.com/company/studioagro/" target="_blank"> <i class="fa-brands fa-linkedin fa-2xl px-2"></i> </a>
                      <a style="color:white !important" href="https://www.youtube.com/channel/UCVdwmTTnG9Bf10bkSs_YxsQ" target="_blank"> <i class="fa-brands fa-youtube fa-2xl "></i>  </a>
                    </li>
                  </ul>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                  <h5>Links</h5>
                  <ul class="list-unstyled quick-links">
                    <li><a href="" style="color:White !important"><i style="color:White" class="fa fa-angle-double-right"></i> Home</a></li>
                    <li><a href="#about" style="color:White !important"><i style="color:White" class="fa fa-angle-double-right"></i> Sobre Nós</a></li>
                    <li><a href="#servicos" style="color:White !important"><i style="color:White" class="fa fa-angle-double-right"></i> Nossos Serviços</a></li>
                    <li><a href="#canal" style="color:White !important"><i style="color:White" class="fa fa-angle-double-right"></i> Canal Studio</a></li>
                    <li><a href="#faq" style="color:White !important"><i style="color:White" class="fa fa-angle-double-right"></i> FAQ</a></li>
                  </ul>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                  <h5>Contato</h5>
                  <ul class="list-unstyled quick-links">
                    <li><a href="" style="color:white !important"><i class="fa fa-angle-double-right"></i> Telefone: (51) 3021-7970</a></li>
                    <li><a href="" style="color:white !important"><i class="fa fa-angle-double-right"></i> E-mail: contato@studioagronegocio.com.br</a></li>
                    <li><a href="" style="color:white !important"><i class="fa fa-angle-double-right"></i> Endereço: Rua Gen. Neto, 556 – Moinhos de Vento, Porto Alegre – RS, 90560-020</a></li>
                    <li><button v-b-modal.contact class="btn mt-2 pulse" style="background-color:rgb(0, 87, 68); color:white"><i class="fa-solid fa-message"></i> Entrar em Contato...</button></li>
                  </ul>
                </div>
              </div>

              <b-modal id="contact" size="xl" title="Contato Studio Agro">
                <section id="contact" class="contact" >
                  <div class="container">

                    <div class="section-header mb-4" >
                      <p style="text-align: center;"><b>Preencha suas informações que nossa equipe entrará em contato o mais breve possível.</b></p>
                    </div>

                    <div class="row gx-lg-0 gy-4" >

                      <div class="col-lg-6" >

                        <img src="/MAPA-POA.jpg" style="max-width: 90%; border-radius: 10px;">

                      </div>

                      <div class="col-lg-6 mt-5">
                          <form role="form" class="php-email-form" @submit.prevent="enviarFormulario">
                            <div class="row">
                              <div class="col-md-6 form-group">
                                <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="Nome" required>
                              </div>
                              <div class="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" v-model="formData.email" class="form-control" id="email" placeholder="Email" required>
                              </div>
                            </div>
                            <div class="form-group mt-3">
                              <input type="text" v-model="formData.contact" class="form-control" id="subject" placeholder="Telefone/Celular" required>
                            </div>
                            <div class="form-group mt-3">
                              <input type="text" v-model="formData.subject" class="form-control" id="subject" placeholder="Assunto" required>
                            </div>
                            <div class="form-group mt-3">
                              <textarea v-model="formData.message" class="form-control" name="message" rows="7" placeholder="Mensagem" required></textarea>
                            </div>
                            
                            <div class="text-center mt-3">
                              <button type="submit" class="btn" style="color:white;background-color:#005744"><i class="fa-regular fa-paper-plane"></i> Enviar Mensagem</button>
                            </div>
                        </form>

                      </div><!-- End Contact Form -->

                    </div>

                  </div>
                </section>
              </b-modal>
                
              <div class=" mt-4 row">
                <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                  <span style="text-align: center;">Copyright © StudioAgro 2023 – CNPJ: 12.340.921/0001-82 por <b>Omega Software</b>.</span>
                </div>
              </div> 

            </div>
          </section>

          

        </div>  
      </div>

    </div>
  </div>




</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      isPWA: false,
      isIphone: false,
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
        contact: ''
      },
      responseMessage: '',
    }
  },
  methods: {
    async enviarFormulario() {
      try {
        const response = await axios.post('/api/enviar-email', this.formData);
        this.responseMessage = response.data;
        alert('Mensagem enviada com sucesso.');
      } catch (error) {
        console.error(error); // Verifique o erro completo no console
        this.responseMessage = 'Ocorreu um erro ao enviar o e-mail.';
      }
    },
    isiOS(){

      let iphone = /iPad|iPhone|iPod/.test(navigator.userAgent);
      
      if (iphone === true) {
        this.isIphone = true;
      }else{
        this.isIphone = false;
      }
    },
    getPWADisplayMode() {
            if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
                this.isPWA = true;
            }else{
                this.isPWA = false;
            }
    },
    showToast(){
      this.$bvToast.show('toastiOS')
      const lks = document.getElementById("lukash-bottom");
      lks.style.display = "none";
      // console.log(lks);
    },
    closeToast(){
      this.$bvToast.hide('toastiOS');
      const lks = document.getElementById("lukash-bottom");
      lks.style.display = "block";
      // console.log(lks);
    },
  },
  mounted(){

    this.isiOS();    

    this.getPWADisplayMode();

    // window.addEventListener('beforeinstallprompt', (e) => {
    //             // ! Prevent Chrome 67 and earlier from automatically showing the prompt
    //             if (window.matchMedia('(display-mode: standalone)').matches) {  
    //                 // console.log('display-mode is standalone')
    //             }else{

    //                 // console.log('beforeinstallprompt button')
    //                 e.preventDefault()
    //                 // Stash the event so it can be triggered later.
    //                 this.deferredPrompt = e

    //             }
    // })
                
    // const installApp = document.getElementById('installApp');

    // installApp.addEventListener('click', async () => {

    //         this.deferredPrompt.prompt()
    //         // Wait for the user to respond to the prompt
    //         this.deferredPrompt.userChoice.then((choiceResult) => {
    //             if (choiceResult.outcome === 'accepted') {
    //                 // Call another function?
    //             }
    //             this.deferredPrompt = null
    //   })


    // })
  }
}


</script>

<style>

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  color: white;
  background-color: #313131;
  text-align: center;
}

.install-app-btn-container {
  display: none;
}

.b-toaster.b-toaster-bottom-full{
  bottom: 50px !important;
}

#toastiOS:after{
  border-right: solid 35px transparent;
  border-left: solid 35px transparent;
  border-top: solid 30px #ffffff;
  transform: translateX(-50%);
  position: absolute;
  content: '';
  left: 50%;
  height: 0;
  width: 0;
}



@media only screen and (max-width: 980px) {

  .aplicativo-mobile{
    display: flex;
    padding-top: 150px;
    flex-direction: column;
  }

  #vr_app{
    display:none !important;
  }

  #app_cat{
    width: 100% !important;
  }

  #img_app{
    width: 90% !important;
  }



}

</style>