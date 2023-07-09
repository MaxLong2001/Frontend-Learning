<template>
  <div>
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="showName">Click me to show name</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: 'Harvard University',
      address: 'Cambridge, Massachusetts, United States'
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
  background-color: yellow;
}
</style>