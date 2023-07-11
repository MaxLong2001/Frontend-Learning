<template>
  <li>
    <label>
      <input
          type="checkbox"
          :checked="todo.completed"
          @change="checkThisTodo(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.content }}</span>
      <input
          type="text"
          v-show="todo.isEdit"
          v-model="content"
          @blur="handleEdit(todo)"
          @keyup.enter="handleEdit(todo)"
          ref="editInput"
      >
    </label>
    <button class="btn btn-danger" @click="deleteThisTodo(todo.id)">删除</button>
    <button class="btn btn-edit" @click="editThisTodo(todo)" v-show="!todo.isEdit">{{ '编辑' }}</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: 'Item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      content: this.todo.content
    }
  },
  methods: {
    checkThisTodo(id) {
      this.$bus.$emit('checkTodo', id)
    },
    deleteThisTodo(id) {
      if (confirm('确定删除吗？') === false) return
      pubsub.publish('deleteTodo', id)
    },
    handleEdit(todo) {
      if (!this.content.trim()) return alert('输入不能为空')

      todo.isEdit = false
      this.$bus.$emit('updateTodo', todo.id, this.content.trim())
    },
    editThisTodo(todo) {
      if (todo.isEdit === undefined) {
        this.$set(todo, 'isEdit', true)
      } else {
        todo.isEdit = !todo.isEdit
      }
      this.$nextTick(() => {
        this.$refs.editInput.focus()
      })
    },
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #dddddd;
}

li:hover button {
  display: block;
}
</style>