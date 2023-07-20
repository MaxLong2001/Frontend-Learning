<template>
  <div class="child">
    <h1>This is Child.</h1>
    <Son/>
  </div>
</template>

<script>
import Son from '@/components/Son.vue'

export default {
  name: 'Child',
  components: {
    Son
  }
}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
