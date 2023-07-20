<template>
  <div class="son">
    <h1>This is Son.</h1>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue'

export default {
  name: 'Son',
  components: {
    Dialog
  },
}
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
