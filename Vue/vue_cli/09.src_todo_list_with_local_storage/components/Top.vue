<template>
  <div class="todo-header">
    <input
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
        v-model="content"
        @keyup.enter="addTodo"/>
    <button
        class="btn btn-primary"
        @click="addTodo"
    >添加任务
    </button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: 'Top',
  data() {
    return {
      content: ''
    }
  },
  props: {
    receiveTodo: {
      type: Function,
      required: true
    }
  },
  methods: {
    addTodo() {
      if (!this.content.trim()) return alert('输入不能为空')

      const todo = {
        id: nanoid(),
        content: this.content.trim(),
        completed: false
      }
      this.receiveTodo(todo)
      this.content = ''
    }
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

.btn-primary {
  position: relative;
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
  left: 50%;
  margin-top: 5px;
  margin-left: -28px;
}
</style>