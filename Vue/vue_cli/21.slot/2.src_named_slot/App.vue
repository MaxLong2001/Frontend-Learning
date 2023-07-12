<template>
  <div class="app">
    <Category title="FOOD">
      <img slot="center" src="https://s1.ax1x.com/2023/07/12/pChCz3d.jpg" alt="pic.jpg">
      <div slot="footer" class="foot">
        <a slot="footer" href="https://buaa.edu.cn">Beihang University</a>
      </div>
    </Category>
    <Category title="DRINK">
      <video slot="center" src="https://www.w3school.com.cn/example/html5/mov_bbb.mp4" controls></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.tsinghua.edu.cn/">Tsinghua University</a>
          &nbsp;
          <a href="https://www.pku.edu.cn/">Peking University</a>
        </div>
      </template>
      <h4 slot="footer">This is a footer</h4>
    </Category>
    <Category title="SNACKS">
      <ul slot="center">
        <li v-for="(it, index) in snacks" :key="index">{{ it }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a slot="footer" href="https://www.cmu.edu//">Carnegie Mellon University</a>
      </div>
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
.app, .foot, h4 {
  display: flex;
  justify-content: space-around;
}
</style>
