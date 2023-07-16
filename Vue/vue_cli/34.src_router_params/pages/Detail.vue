<template>
  <ul>
    <li>Message id: {{ $route.params.id}}</li>
    <li>Message title: {{$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
  name:'Detail'
}
</script>

<style lang="scss" scoped>

</style>