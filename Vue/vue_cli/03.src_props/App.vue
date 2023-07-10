<template>
  <div id="app">
    <Student name="MaxLong" sex="male" :age="21"/>
    <hr/>
    <Student name="Diana" sex="female" :age="20"/>
    <hr/>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Student
  },
}
</script>
