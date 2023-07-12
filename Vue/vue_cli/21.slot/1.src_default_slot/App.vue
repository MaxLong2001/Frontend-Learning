<template>
  <div class="app">
    <Category title="FOOD">
      <img src="https://s1.ax1x.com/2023/07/12/pChCz3d.jpg" alt="pic.jpg">
    </Category>
    <Category title="DRINK">
      <video src="https://www.w3school.com.cn/example/html5/mov_bbb.mp4" controls></video>
    </Category>
    <Category title="SNACKS">
      <ul>
        <li v-for="(it, index) in snacks" :key="index">{{ it }}</li>
      </ul>
    </Category>
  </div>
</template>

<script>
import Category from '@/components/Category'

export default {
  name: 'App',
  components: {
    Category
  },
  data() {
    return {
      food: ['Apple', 'Banana', 'Orange', 'Pear'],
      drink: ['Coke', 'Sprite', 'Fanta', 'Pepsi'],
      snacks: ['Chips', 'Chocolate', 'Cookie', 'Candy']
    }
  }
}
</script>

<style>
.app {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>
