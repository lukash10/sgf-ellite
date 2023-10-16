<template>
    <div class="d-flex" style="height: 100vh;">
      

        <main>
            <header> 
                <h4 class="color-main"><i class="fa-solid fa-list"></i> Listar Notícias</h4>
            </header>

            <div class="container-fluid table-lks">

                <table class="table" style="border: 1px solid #f4f4f4;border-radius: 9px;">
                    <thead style="background: #474747;color: white;">
                        <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Data</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="post in posts" :key="post.id">
                            <td> {{ post.title }}</td>
                            <!-- <td> DATA </td> -->
                            <td> {{ formatData(post.createdAt) }}</td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <router-link :to=" `/cadastrarnoticia?id=${post.id}` "><button class="btn-list"><i class="fa-solid fa-pen-to-square"></i> Editar</button></router-link>
                                    </div>
                                    <div class="col">
                                        <button class="btn-list-del" @click="deletarPost(post.id)"><i class="fa-solid fa-trash"></i> Excluir</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>         
                </table>
            </div>  
        </main>
    </div>
</template>


<script>

import axios from "axios";

export default {

  components: {
    
  },
    data() {
        return {
            posts: [],
        }
    },
    async mounted() {
        await this.getPosts();
    },
    methods: {
        formatData(data){
            const formated = new Date(data);

            return formated.toLocaleDateString();
        },
        async getPosts() {
            const response = await axios.get('/api/news');

            this.posts = response.data;
        },
        async deletarPost(id){
            await axios.delete(`/api/post/${id}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }} );
            alert ('Notícia deletada com sucesso.');
            await this.getPosts();
        },
        editPost(id){
            this.$router.push(`/cadastrarnoticia?id=${id}`);
        }

    }
}

</script>

<style scoped>

.btn-list{
    background: #008360;
    border: none;
    color: white;
    width: 90px;
    height: 32px;
    border-radius: 5px;
}

.btn-list:hover{
    background: #09462a;
}

.btn-list-del{
    background: #ae161e;;
    border: none;
    color: white;
    width: 90px;
    height: 32px;
    border-radius: 5px;
}

.btn-list-del:hover{
    background: #e71d28;
}

body{
    height: auto;
}


main{
    width: 100%;
    height: 100%;
}

header{
    height: 110px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 26%) 19px 0px 23px 1px;
}

@media only screen and (max-width: 600px){
    .btn-list{
        margin-bottom: 5px;
    }

    .table-lks{
        overflow: scroll;
        
    }
}

.table-lks{
    padding: 30px;
}


</style>
