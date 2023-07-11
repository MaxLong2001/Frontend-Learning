<template>
  <div>
    <button @click="show = !show">Show / Hide</button>
    <transition-group name="hello" appear>
      <h1 v-show="show" key="1">Hello World</h1>
      <h1 v-show="show" key="2">Hello Vue</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Transit',
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

/*.hello-enter{
  transform: translateX(-100%);
}
.hello-enter-to{
  transform: translateX(0);
}
.hello-leave{
  transform: translateX(0);
}
.hello-leave-to{
  transform: translateX(100%);
}*/

.hello-enter, .hello-leave-to{
  transform: translateX(-100%);
}
.hello-enter-to, .hello-leave{
  transform: translateX(0);
}
.hello-enter-active, .hello-leave-active{
  transition: 1s ease-in-out;
}

</style>