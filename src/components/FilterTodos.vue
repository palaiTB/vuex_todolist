<template>
    <div class="container mb-3" style="text-align: left !important;">
        Filter Todos
        <select @change="filterTodos($event)" class="form-control" style="width: 10%">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
        </select>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "FilterTodos",
        methods: mapActions(['filterTodos'])
    }
</script>

<style scoped>

</style>
