<template>
  <Demo msg="Hello World!" school="Tsinghua University" @hello="showHello">
    <template v-slot:test>
      <span>This is a slot.</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    function showHello() {
      alert('Hello in App')
    }

    return {
      showHello
    }
  }
}
</script>

<style>

</style>
