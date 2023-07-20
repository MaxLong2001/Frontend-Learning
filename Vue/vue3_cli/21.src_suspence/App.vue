<template>
  <div class="app">
    <h1>This is App.</h1>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

const Child = defineAsyncComponent(() => import('./components/Child.vue'))

export default {
  name: 'App',
  components: {
    Child
  },
}
</script>

<style>
.app {
  background-color: grey;
  padding: 10px;
}
</style>
