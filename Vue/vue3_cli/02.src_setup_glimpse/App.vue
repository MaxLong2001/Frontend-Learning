<template>
  <h1>This is App.</h1>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <button @click="hello">Say Hello</button>
  <hr/>

  <p>Sex: {{ sex }}</p>
  <button @click="welcome">Say Welcome</button>
  <hr/>

  <button @click="test">Test Vue2 in Vue3</button>
</template>

<script>
import {h} from 'vue'

export default {
  name: 'App',
  data() {
    return {
      sex: 'Male'
    }
  },
  methods: {
    welcome() {
      alert('Welcome to Vue 3')
    }
  },
  setup() {
    let name = 'Max'
    let age = 27

    function hello() {
      alert(`Hello, my name is ${name} and I am ${age} years old.`)
    }

    function test() {
      console.log(name)
      console.log(age)
      console.log(hello)
      console.log(this.sex)
      console.log(this.welcome)
    }

    return {
      name,
      age,
      hello,
      test
    }

    // return () => h('h1', 'Hello World')
  }
}
</script>

<style>

</style>
