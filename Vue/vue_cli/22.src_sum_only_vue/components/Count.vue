<template>
  <div>
    <h1>Current Sum: {{sum}}</h1>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="plus">+</button>
    <button @click="subtract">-</button>
    <button @click="uneven">Add When Uneven</button>
    <button @click="wait">Add Async</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      sum: 0,
      n: 1
    }
  },
  methods: {
    plus() {
      this.sum += this.n
    },
    subtract() {
      this.sum -= this.n
    },
    uneven() {
      if (this.sum % 2 !== 0) {
        this.sum += this.n
      }
    },
    wait() {
      setTimeout(() => {
        this.sum += this.n
      }, 1000)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>