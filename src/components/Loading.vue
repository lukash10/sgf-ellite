<template>

    <div class="text-center">
        
        <div class="d-flex" style="justify-content:center">
            <img class="pulsate" src="/logo_cat.png" style="width:80px">
        </div>
        <p class="mt-3 pulsate">Carregando Dados ...</p>
    </div>



</template>

<style>

.pulsate{
    -webkit-animation: pulsate 2s ease-out;
    -webkit-animation-iteration-count: infinite; 
    opacity: 0.5;
    font-weight: 600;
    color: #0ac10a;
}

@keyframes pulsate {
    0% { 
        opacity: 0;
    }
    100% { 
        opacity: 1;
    }
}

</style>