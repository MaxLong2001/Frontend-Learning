<template>
  <div>
    <button @click="show = !show">Show / Hide</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__zoomOut"
    >
      <h1 v-show="show" key="1">Hello World</h1>
      <h1 v-show="show" key="2">Hello Vue</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: 'ThirdPartyAnimate',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: skyblue;
  padding: 10px;
}

</style>