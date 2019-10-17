<template>
    <div class="container mb-5">
        <h3>Add Todo</h3>
        <form @submit="onSubmit">
            <input type="text " v-model="title" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn btn-sm ml-3 btn-danger">
            <br>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "AddTodo",
        data(){
            return{
                title:'',
            }
        },
        methods:{
            ...mapActions(['addTodo']),
            onSubmit(e)
            {
                e.preventDefault();
                this.addTodo(this.title)
            },
        }
    }
</script>

<style scoped>

</style>
