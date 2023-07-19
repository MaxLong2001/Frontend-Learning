<template>
  <button @click="isShowDemo = !isShowDemo">Toggle Demo</button>
  <hr/>
  <Demo v-if="isShowDemo"/>
</template>

<script>
import Demo from './components/Demo.vue'
import {ref} from "vue";

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    let isShowDemo = ref(true)
    return {
      isShowDemo
    }
  }
}
</script>

<style>

</style>
