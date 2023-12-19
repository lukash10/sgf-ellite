<template>

<aside id="sidebarMenu" class="bg-dark flex-column">

    <a class="text-decoration-none align-items-center text-white text-center mt-3">
        <span class="fs-5 d-none d-sm-inline">Sistema de Gestão<br>Financeira</span>
    </a>

    <ul class="nav nav-pills flex-column mt-4">
        
        <li class="nav-item py-2 py-sm-0">
            <a class="nav-link" href="/dashboard" style="display: flex;align-items: center;justify-content: center">
                <div class="menu-icon" style="justify-content: center;align-items: center;"><i class="fa-solid fa-house"></i></div>
                <span class="menu-title">Página Inicial</span>
                
            </a>
        </li>

        <div class="mb-2">
            <li class="nav-item py-2 py-sm-0">
                <a class="nav-link" data-toggle="collapse" href="#collapseClientes" style="display: flex;align-items: center;">
                    <div class="menu-icon" style=""><i class="fa-solid fa-person"></i></div>
                    <span class="menu-title">Área de Clientes</span>
                    <i class="px-3 fa-solid fa-caret-down"></i>
                </a>
            </li>
            
            <ul class="collapse" id="collapseClientes" style="padding: 0 !important;">
                <router-link to="/cadClientes">
                    <li class="lks-m mt-2 mb-1">
                        <button class="btn-l mb-1 ms-4"><i class="fa-solid fa-person"></i> Cadastrar Cliente</button>
                    </li>
                </router-link>
                <router-link to="/listClientes">
                    <li class="lks-m"> 
                        <button class="btn-l mt-1 ms-4"><i class="fa-solid fa-people-arrows"></i> Listar Clientes</button>
                    </li>
                </router-link>
            </ul>
        </div>

                
        <hr style="color: white;">

        <a class="text-decoration-none align-items-center text-white text-center mb-4">
            <span class="fs-5 d-none d-sm-inline"><i class="fa-solid fa-percent"></i> Área Financeira</span>
        </a>

        <div class="mb-2">
            <li class="nav-item py-2 py-sm-0">
                <a class="nav-link" data-toggle="collapse" href="#collapseContas" style="display: flex;align-items: center;">
                    <div class="menu-icon" style=""><i class="fa-solid fa-credit-card"></i></div>
                    <span class="menu-title">Contas a Receber</span>
                    <i class="px-3 fa-solid fa-caret-down"></i>
                </a>
            </li>
            
            <ul class="collapse" id="collapseContas" style="padding: 0 !important;">
                <router-link to="/cadReceber">
                    <li class="lks-m mt-2 mb-1">
                        <button class="btn-l mb-1 ms-4"><i class="fa-brands fa-cc-visa"></i> <span>Conta a Receber </span></button>
                    </li>
                </router-link>
                <router-link to="/listReceber">
                    <li class="lks-m"> 
                            <button class="btn-l mt-1 ms-4"><i class="fa-solid fa-list-ul"></i> Listar Contas</button>
                    </li>
                </router-link>
            </ul>
        </div>

        <div class="mb-2">
            <li class="nav-item py-2 py-sm-0">
                <a class="nav-link" data-toggle="collapse" href="#collapseContasPagar" style="display: flex;align-items: center;">
                    <div class="menu-icon" style=""><i class="fa-solid fa-credit-card"></i></div>
                    <span class="menu-title">Contas a Pagar</span>
                    <i class="px-3 fa-solid fa-caret-down"></i>
                </a>
            </li>
            
            <ul class="collapse" id="collapseContasPagar" style="padding: 0 !important;">
                
                <router-link to="/cadPagar">
                    <li class="lks-m mt-2 mb-1">
                        <button class="btn-l mb-1 ms-4"><i class="fa-brands fa-cc-mastercard"></i> Contas a Pagar</button>
                    </li>
                </router-link>

                <router-link to="/listPagar">
                    <li class="lks-m"> 
                        <button class="btn-l mt-1 ms-4"><i class="fa-solid fa-list-ul"></i> Listar Contas a Pagar</button>
                    </li>
                </router-link>
            </ul>
        </div>

        
        



    </ul>

    <div class="p-3" style="position: absolute; bottom: 0;">
        <div class="dropdown open p-3 mt-auto">
        <button class="btn border-none text-white dropdown-toggle" type="button" id="triggerId" data-aria-expanded="false">
            <i class="fa fa-user"></i><span class="ms-2">Yousaf</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="triggerId">
            <button class="dropdown-item" href="#">Setting</button>
            <button class="dropdown-item" href="#">Profile</button>
        </div>
        </div>
    </div>     
</aside>

</template>


<style scoped>

.lks-m{
    display: flex;
    background: #ffffff;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
}
.nav-link{
    margin: 5px !important;
    padding: 5px !important;
}

.nav-link:hover{
    background-color: #3b3b3b !important;
}

a{
    color: white;
    text-decoration: none !important;
}

.nav-link:hover, .nav-link:focus{
    color: white !important;
}

.btn-l{
    background: none;
    border: none;
    padding: 10px;
    max-width: 100%;
}
.menu-icon{
    font-size: 1.2rem;
    width: 35px;
    min-width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: inline-block;
    
    border-radius: 2px;
    transition: color 0.3s;
}

.menu-title{
    font-size: 0.9em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
    transition: color 0.3s;
}


</style>