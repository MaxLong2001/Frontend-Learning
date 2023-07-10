<template>
  <div class="student">
    <h2 @click="showName">Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import {mixin, mixin2} from '@/mixin'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      name: 'MaxLong',
      sex: 'male',
    }
  },
  // mixins: [mixin, mixin2],
}
</script>

<style scoped>
.student {
  background-color: gray;
}
</style>