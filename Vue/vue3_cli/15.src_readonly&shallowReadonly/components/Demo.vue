<template>
  <p>Sum: {{ sum }}</p>
  <button @click="sum++">Click me to add</button>
  <hr/>


  <h1>Person</h1>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <p>Salary: {{ job.first.salary }}</p>

  <button @click="name = 'John Doe'">Click me to change name</button>&nbsp;
  <button @click="age++">Click me to add age</button>&nbsp;
  <button @click="job.first.salary += 1000">Click me to add salary</button>
</template>

<script>
import {reactive, readonly, ref, shallowReadonly, toRefs} from 'vue'

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
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

    // person = readonly(person)
    person = shallowReadonly(person)

    sum = readonly(sum)

    return {
      sum,
      ...toRefs(person)
    }
  }
}
</script>

<style>

</style>
