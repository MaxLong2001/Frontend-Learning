<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
    <h2>Student age: {{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      msg: 'I am a student',
    }
  },
  // props: ['name', 'sex', 'age']

  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // }

  props: {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      default: 'male',
    },
    age: {
      type: Number,
      default: 18,
    }
  }
}
</script>

<style scoped>
.student {
  background-color: gray;
}
</style>