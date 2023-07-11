<template>
  <div class="school">
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="getSchoolName(name)">Send School Name</button>
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
  props: ['getSchoolName'],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>