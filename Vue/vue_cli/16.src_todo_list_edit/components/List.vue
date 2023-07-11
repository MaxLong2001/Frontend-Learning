<template>
  <ul class="todo-main">
    <Item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
    />
  </ul>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Item from './Item.vue'

export default {
  name: 'List',
  components: {Item},
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>