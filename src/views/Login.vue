<template>
    
    
    <body id="login">

        <div class="container">

            <h1 style="text-align:center;color:white" class="mb-4"> Sistema de Gestão Financeira</h1>

            <div class="row" id="row_login" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">

                <div class="col" style="display: flex;justify-content: center;">
                    <img class="pulse" src="/logo.png" style="width:200px;padding: 20px;">
                </div>

                <div class="col mb-5">
                    <h2 class="text-center" style="color:white">Ellite Imóveis</h2>
                </div>

                <div id="form__login" class="col-4" style="width:460px;height: 350px !important;align-items:center;justify-content: center;">
                    
                    <b-form style="width: 100%;" @submit="onSubmit">

                        <h3 class="text-center mb-5" style="color: #092d11"> Login </h3>

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control radiusform" id="floatingInput" placeholder="name@example.com" v-model="form.login">
                            <label for="floatingInput" style="color:black">Email</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="password" class="form-control radiusform" id="floatingPassword" placeholder="Password" v-model="form.password">
                            <label for="floatingPassword" style="color:black">Senha</label>
                        </div>

                        <div class="mt-4 d-flex" style="justify-content:space-evenly">   
                            <button type="submit" class="btn" style="background: black;"><span style="color:white;font-weight:500">Entrar</span></button>
                            <router-link to="/"><button class="btn" style="background: black;"><span style="color:white;font-weight:500">Voltar</span></button></router-link>
                        </div>
                        
                    </b-form>

                    </div>
            </div>
        </div>
        <b-alert style="position: absolute;" show variant="danger" v-show="error">Houve falha no login, por favor tente novamente.</b-alert>
    </body>

</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            form: {
                login: '',
                password: ''
            },
            error: false
        }
    },
    async mounted() {
        this.error = false;

        const token = localStorage.getItem('token');

        if (token){
            this.$router.push('/dashboard');
        }
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault();

            const response = await axios.post('/api/login', this.form);
            console.log(response);

            if (!response.data.success) {
                this.error = true;
                alert ('Falha no login. Verifique suas credenciais.')
            } else {
                localStorage.setItem('token', response.data.token);
                this.$router.push('/dashboard');
            }
        }
    }
}
</script>

<style scoped>

@media only screen and (max-width: 600px){

#row_login{
    flex-direction: column;
}

.pulse{
    width: 100%;
    padding: 40px;
}

}

body#login{
    background: black;
	user-select: none;
	overflow-y: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

#form__login{
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: white;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;
}

.radiusform{
    border-radius: 10px;
}

.pulse{
    animation: pulse 5s linear;
}

@keyframes pulse {
    
    0%{
        -webkit-transform: scale(0.1);
        transform: scale(0.1);
    }
    100%{
        -webkit-transform: scale(1);
        transform: scale(1);
    }

}

</style>
