<template>
  <div class="app">
    <Category title="SNACKS">
      <template scope="data">
        <ul>
          <li v-for="(it, index) in data.snacks" :key="index">{{ it }}</li>
        </ul>
      </template>
    </Category>
    <Category title="SNACKS">
      <template slot-scope="data">
        <ol>
          <li v-for="(it, index) in data.snacks" :key="index">{{ it }}</li>
        </ol>
      </template>
    </Category>
    <Category title="SNACKS">
      <template scope="{snacks}">
        <h4 v-for="(it, index) in snacks" :key="index">{{ it }}</h4>
      </template>
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

}
</script>

<style>
.app, .foot, h4 {
  display: flex;
  justify-content: space-around;
}
</style>
