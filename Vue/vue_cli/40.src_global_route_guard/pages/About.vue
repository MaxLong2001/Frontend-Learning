<template>
    <h2>This is About.</h2>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log('About mounted!')
  },
  beforeDestroy() {
    console.log('About beforeDestroy!')
  }
}
</script>

<style scoped>

</style>