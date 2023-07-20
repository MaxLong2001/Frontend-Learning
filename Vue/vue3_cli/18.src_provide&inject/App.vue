<template>
  <div class="app">
    <h1>This is App.</h1>
    <p style="color: red">{{ name }} - {{ price }}</p>
    <Child/>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
import {provide, reactive, toRefs} from "vue";

export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    let car = reactive({
      name: 'Rolls-Royce',
      color: 'black',
      price: 1000000
    })

    provide('car', car)

    return {...toRefs(car)}
  }
}
</script>

<style>
.app {
  background-color: grey;
  padding: 10px;
}
</style>
