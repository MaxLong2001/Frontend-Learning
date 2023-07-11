<template>
  <div class="student">
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
    <button @click="sendStudentName">Send Student Name</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      name: 'MaxLong',
      sex: 'male',
    }
  },
  mounted() {
    // console.log('from student', this.$bus)
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('studentName', this.name)
    }
  }
}
</script>

<style scoped>
.student {
  background-color: orange;
  padding: 5px;
}
</style>