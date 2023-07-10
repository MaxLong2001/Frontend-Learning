<template>
  <div class="school">
    <h2>School Name: {{ name}}</h2>
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
}
</script>

<style scoped>
.school {
  background-color: skyblue;
}
</style>