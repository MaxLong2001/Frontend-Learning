<template>
  <div id="app">
    <button @click="getStudents">Get Students</button>
    <button @click="getCars">Get Cars</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getStudents() {
      axios.get('http://localhost:8080/maxlong/students').then(
          response => {
            console.log('success', response.data)
          },
          error => {
            console.log('error', error.message)
          }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/diana/cars').then(
          response => {
            console.log('success', response.data)
          },
          error => {
            console.log('error', error.message)
          }
      )
    }
  }
}
</script>

<style>
</style>
