<template>


    <div v-if="isMobile">
        <b-toast id="example-toast" style="top:0;position: fixed;z-index: 15 !important;right: 15px;margin: auto;"
            title="Aplicativo UniCathedral" static no-auto-hide>
            <div>
                <p class="text-justify">Olá, você pode instalar o aplicativo <br>UniCathedral clicando no botão abaixo.
                </p>
            </div>
            <b-button @click="clickCallback" class="button-ini" style="background: #198754;border-color: white;"><i class="fa-brands fa-google-play"></i> Instalar Aplicativo</b-button>
        </b-toast>
    </div>


</template>
  
<script>
export default {
    data() {
        return {
            count: 0,
            deferredPrompt: null,
            isIphone: false,
        }
    },
    mounted() {
        this.isiOS();
        this.captureEvent()
    },
    methods: {
        isiOS(){
            let iphone = /iPad|iPhone|iPod/.test(navigator.userAgent);

            if (iphone === true) {
                this.isIphone = true;
                
            }else{
                this.isIphone = false;
                
            }
        },
        isMobile() {
            if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        captureEvent() {
            
            window.addEventListener('beforeinstallprompt', (e) => {
                // ! Prevent Chrome 67 and earlier from automatically showing the prompt
                if (window.matchMedia('(display-mode: standalone)').matches) {  
                    
                }else{

                    
                    e.preventDefault()
                    // Stash the event so it can be triggered later.
                    this.deferredPrompt = e

                    if (this.count == 0) {
                            setTimeout(() => {
                                if (this.isIphone == false){
                                    this.showToast();
                                }else{
                                    // console.log("Não mostrar toast para iOS");
                                }
                            }, 4000);
                        this.count++;
                        
                    }
                    

                }
                
                
            })

            
        },
        clickCallback() {
            // Show the prompt

            this.deferredPrompt.prompt()
            // Wait for the user to respond to the prompt
            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    // Call another function?
                }
                this.deferredPrompt = null
            })
        },
        showToast() {
            this.$bvToast.show('example-toast');
        }
    }
}
</script>

<style>
.toast:not(.show) {
    display: block !important;
}

.toast-header {
    justify-content: space-between !important;

}

.b-toast .toast {
    background-color: rgba(255, 255, 255);
}

.close.ml-auto.mb-1{
    border-color: #fff0;
    background: #198754;
    border-radius: 10px;
    color: #fff!important;
    height: 40px;
    width: 40px;
}

</style>