<template>
  <div>
    <button @click="show = !show">Show / Hide</button>
    <transition name="hello" appear>
      <h1 v-show="show">Hello World</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MyAnimate',
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

.hello-enter-active {
  animation: animate 1s ease-in-out;
}

.hello-leave-active {
  animation: animate 1s ease-in-out reverse;
}

@keyframes animate {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>