<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">Click me to show DOM</button>
    <School ref="school"/>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    School
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      console.log(this.$refs.school)
      console.log(this.$refs)
    }
  }
}
</script>
