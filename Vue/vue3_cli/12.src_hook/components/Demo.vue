<template>
  <h1>Sum: {{ sum }}</h1>
  <button @click="sum++">Click me to add</button>
  <hr/>

    <h1>Coordinate of mouse</h1>
    <p>X: {{ point.x }}</p>
    <p>Y: {{ point.y }}</p>
</template>

<script>
import {ref} from 'vue'
import usePoint from "@/hooks/usePoint";

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let point = usePoint()

    return {
      sum,
      point
    }
  },
}
</script>

<style>

</style>
