<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top
            :receiveTodo="receiveTodo"
        />
        <List
            :todos="todos"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />
        <Bottom
            :todos="todos"
            :checkAllTodos="checkAllTodos"
            :clearAllTodos="clearAllTodos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import List from "@/components/List.vue";
import Bottom from "@/components/Bottom.vue";


export default {
  name: 'App',
  components: {Bottom, List, Top},
  data() {
    return {
      todos: [
        {id: '0001', content: 'eat', completed: true},
        {id: '0002', content: 'drink', completed: true},
        {id: '0003', content: 'sleep', completed: false},
        {id: '0004', content: 'drive', completed: false},
      ]
    }
  },
  methods: {
    receiveTodo(todo) {
      this.todos.unshift(todo)
    },
    checkTodo(todoId) {
      this.todos.forEach((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }
      })
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== todoId
      })
    },
    checkAllTodos(completed) {
      this.todos.forEach((todo) => {
        todo.completed = completed
      })
    },
    clearAllTodos() {
      this.todos = this.todos.filter((todo) => {
        return !todo.completed
      })
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
