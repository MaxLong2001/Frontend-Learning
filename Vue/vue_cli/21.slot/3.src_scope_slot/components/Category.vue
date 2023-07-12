<template>
  <div class="category">
    <h2>Category: {{ title }}</h2>
    <slot :snacks="snacks">default</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
  data() {
    return {
      snacks: ['Chips', 'Chocolate', 'Cookie', 'Candy']
    }
  }
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 300px;
  height: 400px;
}

h2 {
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>