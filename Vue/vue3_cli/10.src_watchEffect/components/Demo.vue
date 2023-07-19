<template>
  <h1>Sum: {{ sum }}</h1>
  <button @click="sum++">Click me to add</button>
  <hr/>

  <h1>Message: {{ msg }}</h1>
  <button @click="msg = 'Hello Vue 3'">Click me to change message</button>
  <hr/>

  <h1>Person</h1>
  <p>Name: {{ person.name }}</p>
  <p>Age: {{ person.age }}</p>
  <p>Salary: {{ person.job.first.salary }}</p>
  <button @click="person.name = 'John Doe'">Click me to change name</button>&nbsp;
  <button @click="person.age++">Click me to add age</button>&nbsp;
  <button @click="person.job.first.salary += 1000">Click me to add salary</button>
</template>

<script>
import {reactive, ref, watchEffect} from 'vue'

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let msg = ref('Hello World')
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

    watchEffect(() => {
      console.log('watchEffect')
      console.log(sum.value)
      console.log(msg.value)
      console.log(person.job.first.salary)
    })

    return {
      sum,
      msg,
      person,
    }
  }
}
</script>

<style>

</style>
