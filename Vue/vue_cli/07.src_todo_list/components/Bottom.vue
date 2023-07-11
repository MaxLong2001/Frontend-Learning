<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <input
          type="checkbox"
          :checked="handleAll"
          @change="checkAll"
      />
    </label>
    <span>
          <span>已完成 {{ completedCount }}</span> / 全部 {{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  props: {
    todos: {
      type: Array,
      required: true
    },
    checkAllTodos: {
      type: Function,
      required: true
    },
    clearAllTodos: {
      type: Function,
      required: true
    }
  },
  computed: {
    completedCount() {
      return this.todos.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
    },
    handleAll() {
      if (this.todos.length === 0) return false
      return this.completedCount === this.todos.length
    }
  },
  methods: {
    checkAll(e) {
      this.checkAllTodos(e.target.checked)
    },
    clearAll() {
      if (this.completedCount === 0) return alert('没有已完成的任务')
      if (confirm('确定清除已完成任务吗？') === false) return
      this.clearAllTodos()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>