<template>
  <h1>This is App.</h1>
  <p>Name: {{ person.name }}</p>
  <p>Age: {{ person.age }}</p>
  <p>Job: {{ person.job.title }} at {{ person.job.company }} with salary {{ person.job.salary }}</p>
  <p>Hobbies: {{ person.hobbies }}</p>
  <p>Test c: {{ person.job.a.b.c }}</p>
  <button @click="changeInfo">Change Info</button>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: 'Max',
      age: 27,
      job: {
        title: 'Software Developer',
        company: 'Google',
        salary: 100000,
        a: {
          b: {
            c: 1
          }
        }
      },
      hobbies: ['Sports', 'Cooking', 'Reading']
    })

    function changeInfo() {
      person.name = 'Anna'
      person.age = 28

      person.job.title = 'Product Manager'
      person.job.company = 'Microsoft'
      person.job.a.b.c = 2

      person.hobbies[0] = 'Coding'
    }

    return {
      person,
      changeInfo
    }
  }
}
</script>

<style>

</style>
