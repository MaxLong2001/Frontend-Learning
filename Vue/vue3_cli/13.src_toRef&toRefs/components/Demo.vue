<template>
  <h1>Person</h1>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <p>Salary: {{ job.first.salary }}</p>

  <button @click="name = 'John Doe'">Click me to change name</button>&nbsp;
  <button @click="age++">Click me to add age</button>&nbsp;
  <button @click="job.first.salary += 1000">Click me to add salary</button>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      name: 'John',
      age: 30,
      job: {
        first: {
          title: 'Software Engineer',
          salary: 100000
        }
      }
    })

    // const nameRef = toRef(person, 'name')
    // const ageRef = toRef(person, 'age')
    // const salaryRef = toRef(person.job.first, 'salary')

    // const personRefs = toRefs(person)

    return {
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.first, 'salary'),
      ...toRefs(person)
    }
  }
}
</script>

<style>

</style>
