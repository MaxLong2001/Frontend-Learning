<template>
  <div class="category">
    <h2>Category: {{ title }}</h2>
<!--    <ul>-->
<!--      <li v-for="(it, index) in listData" :key="index">{{ it }}</li>-->
<!--    </ul>-->
    <slot>default</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']
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