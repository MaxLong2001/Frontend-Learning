<template>
  <ul>
    <li>Message id: {{ id }}</li>
    <li>Message title: {{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'title']
}
</script>

<style lang="scss" scoped>

</style>