<template>
  <div class="student">
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
    <input type="text" v-my-focus:value="name">
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
}
</script>

<style scoped>
.student {
  background-color: gray;
}
</style>