<template>
  <div>
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Address: {{ address }}</h2>
    <button @click="showName">Click me to show name</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: 'John Doe',
      age: 18,
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  }
}
</script>

<style>
.demo {
  background-color: blue;
}
</style>