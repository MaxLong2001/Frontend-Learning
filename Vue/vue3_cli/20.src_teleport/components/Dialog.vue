<template>
  <div>
    <button @click="isShow = true">Click me to pop</button>
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <p>This is a dialog</p>
          <p>Something...</p>
          <p>Something...</p>
          <p>Something...</p>
          <button @click="isShow = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false)
    return {isShow}
  }
}
</script>

<style scoped>
.dialog {
  width: 500px;
  height: 200px;
  background-color: greenyellow;

  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);

}
</style>