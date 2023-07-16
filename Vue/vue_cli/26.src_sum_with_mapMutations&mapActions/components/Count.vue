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
    <button @click="plus(n)">+</button>
    <button @click="subtract(n)">-</button>
    <button @click="uneven(n)">Add When Uneven</button>
    <button @click="wait(n)">Add Async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  computed: {
    ...mapState(['sum', 'school', 'subject']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    // plus() {
    //   this.$store.commit('PLUS', this.n)
    // },
    // subtract() {
    //   this.$store.commit('SUBTRACT', this.n)
    // }
    ...mapMutations({
      plus: 'PLUS',
      subtract: 'SUBTRACT'
    }),

    // uneven() {
    //   this.$store.dispatch('plusIfOdd', this.n)
    // },
    // wait() {
    //   this.$store.dispatch('plusAsync', this.n)
    // }
    ...mapActions({
      uneven: 'plusIfOdd',
      wait: 'plusAsync'
    }),
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>