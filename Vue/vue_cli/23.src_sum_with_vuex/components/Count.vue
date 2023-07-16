<template>
  <div>
    <h1>Current Sum: {{ $store.state.sum }}</h1>
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
      n: 1
    }
  },
  methods: {
    plus() {
      this.$store.commit('PLUS', this.n)
    },
    subtract() {
      this.$store.commit('PLUS', -this.n)
    },
    uneven() {
      this.$store.dispatch('plusIfOdd', this.n)
    },
    wait() {
      this.$store.dispatch('plusAsync', this.n)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>