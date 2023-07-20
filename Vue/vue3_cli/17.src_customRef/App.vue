<template>
  <input type="text" v-model="keyword">
  <p>{{ keyword }}</p>
</template>

<script>
import {customRef} from "vue";

export default {
  name: 'App',
  setup() {
    // let keyword = ref('hello');

    function myRef(value, delay = 1000) {
      console.log('myRef', value);
      let timer = null;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newValue) {
            value = newValue;
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(() => {
              trigger();
            }, delay);
          }
        }
      })
    }

    let keyword = myRef('hello', 500);
    return {keyword}
  }
}
</script>

<style>

</style>
