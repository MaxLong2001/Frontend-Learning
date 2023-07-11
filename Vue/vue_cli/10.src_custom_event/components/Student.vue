<template>
  <div class="student">
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
    <button @click="sendStudentName">Send Student Name</button>
    <button @click="unbindCustomEvent">Unbind Custom Event</button>
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
  methods: {
    sendStudentName() {
      this.$emit('buaa', this.name)
    },
    unbindCustomEvent() {
      this.$off('buaa')
      // this.$off() // unbind all custom events
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