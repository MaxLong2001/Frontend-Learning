<template>
  <div class="school">
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
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
  mounted() {
    // console.log('from school', this.$bus)
    this.$bus.$on('studentName', (studentName) => {
      console.log('get student name: ', studentName)
    })
  },
  beforeDestroy() {
    this.$bus.$off('studentName')
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>