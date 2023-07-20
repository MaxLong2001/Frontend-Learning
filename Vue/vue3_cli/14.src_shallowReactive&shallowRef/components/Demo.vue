<template>
  <p>x: {{ x }}</p>
  <button @click="x.y++">Click me to add x</button>
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
import {reactive, ref, toRefs} from 'vue'

export default {
  name: 'Demo',
  setup() {
    // let person = shallowReactive({
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

    // let x = shallowRef({
    let x = ref({
      y: 0
    })

    return {
      x,
      ...toRefs(person)
    }
  }
}
</script>

<style>

</style>
