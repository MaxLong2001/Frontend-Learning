<template>
  <div class="student">
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
    <button @click="sendStudentName">Send Student Name</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'Student',
  data() {
    return {
      name: 'MaxLong',
      sex: 'male',
    }
  },
  methods: {
    sendStudentName() {
      pubsub.publish('studentName', this.name)
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