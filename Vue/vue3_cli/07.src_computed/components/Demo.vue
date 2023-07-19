<template>
  <h1>Person</h1>
  <p>
    First name:
    <input type="text" v-model="person.firstName">
  </p>
  <p>
    Last name:
    <input type="text" v-model="person.lastName">
  </p>
  <p>
    Full name: {{ person.fullName }}
  </p>
  <hr/>

  <p>
    Full name:
    <input type="text" v-model="person.fullName">
  </p>
</template>

<script>
import {computed, reactive} from 'vue'

export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      firstName: 'John',
      lastName: 'Doe',
    })

    // let fullName = computed(() => {
    //   return `${person.firstName}-${person.lastName}`
    // })
    // person.fullName = computed(() => {
    //   return `${person.firstName}-${person.lastName}`
    // })
    person.fullName = computed({
      get() {
        return `${person.firstName}-${person.lastName}`
      },
      set(value) {
        const parts = value.split('-')
        person.firstName = parts[0]
        person.lastName = parts[1]
      }
    })

    return {
      person,
    }
  }
}
</script>

<style>

</style>
