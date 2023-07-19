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
import {ref, watch} from 'vue'

export default {
  name: 'Demo',
  // watch: {
  //   sum(newValue, oldValue) {
  //     console.log('sum changed from', oldValue, 'to', newValue)
  //   }
  //
  //   sum: {
  //     handler(newValue, oldValue) {
  //       console.log('sum changed from', oldValue, 'to', newValue)
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // },
  setup() {
    let sum = ref(0)
    let msg = ref('Hello World')
    let person = ref({
      name: 'John',
      age: 30,
      job: {
        first: {
          title: 'Software Engineer',
          salary: 100000
        }
      }
    })

    // watch(person.value, (newValue, oldValue) => {
    //   console.log('person changed from', oldValue, 'to', newValue)
    // })

    watch(person, (newValue, oldValue) => {
      console.log('person changed from', oldValue, 'to', newValue)
    }, {
      deep: true
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
