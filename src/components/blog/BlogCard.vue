<template>

    <div class="BlogCard col-md-6 mb-3">

        <div class="imageWrapper" style="border: 1px solid rgb(201 201 201 / 35%); border-radius: 5px; padding: 10px; max-width: 450px; height: 500px; margin: 0 auto; display: flex;flex-direction:column">
            
            <div class="blogImage" style="width: fit-content;height: 300px;;display: flex;align-items: center;">
                <img style="max-width: 100%;max-height: 100%;" :src="'/images_uploaded/' + post.image">
            </div>

            <hr>

            <div class="d-flex" style="    height: 200px;flex-direction: column; justify-content: space-between;">
                <h4 style="color: #222222; flex: 1;">{{ post.title }}</h4>
                <h5 style="color: #222222; flex: 1;">{{ post.subtitle }}</h5>
            </div>

            <div class="d-flex" style="justify-content: space-between; text-align: center;">

                <div class="mt-1 mb-1">
                    <small><b style="color: #888888" v-if="post.user">Postado por: {{ post.user.name }}</b></small>
                </div>

                <div class="dados">
                    <small><b style="color: #888888">{{ formatData(post.createdAt) }}</b></small>
                </div>
            </div>

            <div>
                <a :href="`/noticiasmain?id=${post.id}`"><button class="btn btn-success">Saiba Mais</button></a>
            </div>
                
            
        </div>
    </div>

    
</template>

<script>

export default {
    name: 'BlogCard',
    props: {
       post: Object,
    },
    data() {
        return {
           
        };
    },
    methods:{

        formatData(data){
            const formated = new Date(data);
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            return formated.toLocaleDateString('pt-BR' , options);
        },

    }
}

</script>

<style>

.blogImage{
    border-radius:5px;
}

</style>