<template>
  <div id="app">
    <div class="container">
      <AddTodo></AddTodo>
      <FilterTodos></FilterTodos>
      <Todos></Todos>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: aliceblue;
}
</style>
