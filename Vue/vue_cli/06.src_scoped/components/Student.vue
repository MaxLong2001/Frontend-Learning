<template>
  <div class="student">
    <h2 class="try">Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
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

<style scoped lang="less">
.student {
  background-color: orange;
  .try {
    font-size: 40px;
  }
}
</style>