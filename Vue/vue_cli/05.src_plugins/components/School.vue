<template>
  <div class="school">
    <h2>School Name: {{ name | mySlice }}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="testHello">Test Hello</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',
  data() {
    return {
      name: 'Tsinghua University',
      address: 'Haidian, Beijing',
    }
  },
  methods: {
    testHello() {
      this.hello()
    }
  }
}
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>