<template>
  <h1>This is App.</h1>
  <p>Name: {{ person.name }}</p>
  <p>Age: {{ person.age }}</p>
  <button @click="triggerHello">Trigger Hello</button>
  <hr/>

  <slot></slot>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'Demo',
  props: ['msg', 'school'],
  emits: ['hello'],
  beforeCreate() {
    console.log('Demo beforeCreate')
  },
  setup(props, context) {
    console.log('Demo setup')
    console.log(props)
    console.log(context)

    let person = reactive({
      name: 'Max',
      age: 27,
    })

    function triggerHello() {
      context.emit('hello')
    }

    return {
      person,
      triggerHello
    }
  }
}
</script>

<style>

</style>
