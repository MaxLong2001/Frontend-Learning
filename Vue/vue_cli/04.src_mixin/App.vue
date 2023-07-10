<template>
  <div id="app">
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
}
</script>
