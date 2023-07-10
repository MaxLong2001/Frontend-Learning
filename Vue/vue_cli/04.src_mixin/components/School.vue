<template>
  <div class="school">
    <h2 @click="showName">School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {mixin, mixin2} from '@/mixin'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',
  data() {
    return {
      name: 'Tsinghua University',
      address: 'Haidian, Beijing',
    }
  },
  // mixins: [mixin, mixin2],
}
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>