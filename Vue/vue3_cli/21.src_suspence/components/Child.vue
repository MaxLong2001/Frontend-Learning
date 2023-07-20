<template>
  <div class="child">
    <h1>This is Child.</h1>
    <p>{{ sum }}</p>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'Child',
  // setup() {
  //   let sum = ref(0)
  //   return new Promise((resolve) => {
  //     setTimeout(() =>{
  //       resolve({
  //         sum
  //       })
  //     }, 1000)
  //   })
  // }
  async setup() {
    let sum = ref(0)
    let p = new Promise((resolve) => {
      setTimeout(() =>{
        resolve({
          sum
        })
      }, 1000)
    })
    return await p
  }
}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
