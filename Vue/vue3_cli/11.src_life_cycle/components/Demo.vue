<template>
  <h1>Sum: {{ sum }}</h1>
  <button @click="sum++">Click me to add</button>
</template>

<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue'

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)

    onBeforeMount(() => {
      console.log('>> onBeforeMount')
    })
    onMounted(() => {
      console.log('>> onMounted')
    })
    onBeforeUpdate(() => {
      console.log('>> onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('>> onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('>> onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('>> onUnmounted')
    })

    return {
      sum,
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
}
</script>

<style>

</style>
