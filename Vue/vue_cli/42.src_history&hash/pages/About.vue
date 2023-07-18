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
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    if (localStorage.getItem('school') === 'BUAA') {
      next()
    } else {
      alert('Wrong School!')
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }
}
</script>

<style scoped>

</style>