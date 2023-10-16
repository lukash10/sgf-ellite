<template>

    <div id="BlogList" class="row">
        <BlogCard :post="post" v-for="post in posts" :key="post.id"></BlogCard>
    </div>

</template>


<script>
import BlogCard from './BlogCard.vue';


export default {
    name: "BlogList",
    props: {
        posts: Array,
    },
    data() {
        return {
        //
        };
    },
    components: { BlogCard }
}

</script>