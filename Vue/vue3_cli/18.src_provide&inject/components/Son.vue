<template>
  <div class="son">
    <h1>This is Son.</h1>
    <p style="color: red">{{ car.name }} - {{ car.price }}</p>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: 'Son',
  setup() {
    let car = inject('car')

    return {car}
  }
}
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
