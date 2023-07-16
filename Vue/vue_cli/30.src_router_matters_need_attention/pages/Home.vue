<template>
  <h2>This is Home.</h2>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    console.log('Home mounted!')
  },
  beforeDestroy() {
    console.log('Home beforeDestroy!')
  }
}
</script>

<style scoped>

</style>