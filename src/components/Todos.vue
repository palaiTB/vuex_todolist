<template>
    <div class="container">
        <h3>Todos</h3>
        <div class="clearfix mb-5"></div>
        <div class="todos" style="text-align: left" >
            <div @dblclick="onDblclick(todo)" v-for="(todo,index) in allTodos" :key="todo.id" class="todo" :class="{'is-complete':todo.completed}">
                {{todo.title}}
            <img @click="deleteTodo(todo.id)" src="https://img.icons8.com/android/16/000000/trash.png">
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "Todos",
        computed: mapGetters(['allTodos']),
        methods:{
            ...mapActions(['fetchTodos','deleteTodo', 'updateTodo']), // ... is the spread operator

            onDblclick(todo) {
                const updTodo = {
                    id: todo.id,
                    title: todo.title,
                    completed: !todo.completed
                };
                this.updateTodo(updTodo);
            }
        },
        created() {
            this.fetchTodos()
        }
    }
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .todo {
        border: 2px solid white;
        background: #fff0fd;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    img{
        bottom: 10px;
        right: 10px;
    }
    .is-complete {
        background: #35495e;
        color: #fff;
    }
</style>
