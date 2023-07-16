<template>
  <div>
    <h1>Person</h1>
    <h3 style="color: red">Sum: {{ sum }}</h3>
    <input type="text" placeholder="Please enter your name" v-model="name" @keyup.enter="add">
    <button @click="add">Add Person</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: 'Person',
  data() {
    return {
      name: '',
    }
  },
  computed: {
    persons() {
      return this.$store.state.persons
    },
    sum() {
      return this.$store.state.sum
    }
  },
  methods: {
    add() {
      const person = {
        id: nanoid(),
        name: this.name
      }
      this.$store.commit('ADD_PERSON', person)
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>