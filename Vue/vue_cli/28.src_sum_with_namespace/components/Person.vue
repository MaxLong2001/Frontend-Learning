<template>
  <div>
    <h1>Person</h1>
    <h3 style="color: red">Sum: {{ sum }}</h3>
    <h3>First person name: {{ firstPersonName }}</h3>
    <input type="text" placeholder="Please enter your name" v-model="name" @keyup.enter="add">
    <button @click="add">Add Person</button>
    <button @click="addWang">Add Wang</button>
    <button @click="addServer">Add Server</button>
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
      return this.$store.state.personAbout.persons
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods: {
    add() {
      const person = {
        id: nanoid(),
        name: this.name
      }
      this.$store.commit('personAbout/ADD_PERSON', person)
      this.name = ''
    },
    addWang() {
      const person = {
        id: nanoid(),
        name: this.name
      }
      this.$store.dispatch('personAbout/addWang', person)
      this.name = ''
    },
    addServer() {
      this.$store.dispatch('personAbout/addServer')
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>