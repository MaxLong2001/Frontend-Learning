<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School/>
    <hr/>
    <Student/>
    <hr/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from "@/components/School.vue";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Student,
    School
  },
  data() {
    return {
      msg: 'Hello Vue!',
      studentName: ''
    }
  },
}
</script>

<style>
.app {
  background-color: #eee;
}
</style>