<template>
  <div class="app">
    <h1>This is App.</h1>
  </div>
</template>

<script>
import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref, toRefs} from "vue";

export default {
  name: 'App',
  setup() {
    let sum = ref(0)
    let car = reactive({
      name: 'Rolls-Royce',
      color: 'black',
      price: 1000000
    })
    let readonlyCar = readonly(car)

    console.log('sum isRef: ', isRef(sum))
    console.log('car isReactive: ', isReactive(car))
    console.log('readonlyCar isReadonly: ', isReadonly(readonlyCar))
    console.log('car isProxy: ', isProxy(car))
    console.log('readonlyCar isProxy: ', isProxy(readonlyCar))

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
