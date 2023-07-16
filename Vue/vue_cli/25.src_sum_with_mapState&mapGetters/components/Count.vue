<template>
  <div>
    <h1>Current Sum: {{ sum }}</h1>
    <h1>Big Sum: {{ bigSum }}</h1>
    <h3>In {{ school }}, learning {{ subject }}</h3>
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
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },
    ...mapState(['sum', 'school', 'subject']),

    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
    ...mapGetters(['bigSum'])
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