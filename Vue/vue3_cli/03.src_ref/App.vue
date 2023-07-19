<template>
  <h1>This is App.</h1>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <p>Job: {{ job.title }} at {{ job.company }} with salary {{ job.salary }}</p>
  <button @click="changeInfo">Change Info</button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup() {
    let name = ref('Max')
    let age = ref(27)
    let job = ref({
      title: 'Software Developer',
      company: 'Google',
      salary: 100000
    })

    function changeInfo() {
      name.value = 'Anna'
      age.value = 28

      job.value.title = 'Product Manager'
      job.value.company = 'Microsoft'
      console.log(name, age, job)
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

<style>

</style>
