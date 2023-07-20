<template>
  <p>Sum: {{ sum }}</p>
  <button @click="sum++">Click me to add</button>
  <hr/>


  <h1>Person</h1>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <p>Salary: {{ job.first.salary }}</p>
  <p v-show="person.car">Car: {{ person.car }}</p>

  <button @click="name = 'John Doe'">Click me to change name</button>&nbsp;
  <button @click="age++">Click me to add age</button>&nbsp;
  <button @click="job.first.salary += 1000">Click me to add salary</button>
  <hr/>
  <button @click="showRawPerson">Click to show raw person</button>&nbsp;
  <button @click="addCar">Click to add car</button>
  <button @click="person.car.name += '!'">Change car name</button>
  <button @click="person.car.price += 1000">Change car price</button>
</template>

<script>
import {markRaw, reactive, ref, toRaw, toRefs} from 'vue'

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

    function showRawPerson() {
      console.log(toRaw(person))
    }

    function addCar() {
      let car = {
        name: 'Rolls Royce',
        price: 1000000
      }
      person.car = markRaw(car)
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
    }
  }
}
</script>

<style>

</style>
