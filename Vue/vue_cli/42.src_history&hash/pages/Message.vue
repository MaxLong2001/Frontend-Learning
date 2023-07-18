<template>
  <div>
    <ul>
      <li v-for="m in messageArr" :key="m.id">
<!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp;-->

        <router-link :to="{
          name: 'detail', //传params参数时，必须指定name属性，不能使用path属性
          params: {
            id: m.id,
            title: m.title
          }
        }">
          {{ m.title }}
        </router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">push</button>
        <button @click="replaceShow(m)">replace</button>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageArr: [
        {id: '1', title: 'message001'},
        {id: '2', title: 'message002'},
        {id: '3', title: 'message003'},
      ]
    }
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: 'detail',
        params: {
          id: m.id,
          title: m.title
        }
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'detail',
        params: {
          id: m.id,
          title: m.title
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>