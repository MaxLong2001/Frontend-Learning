<template>
  <div>
    <ul>
      <li v-for="m in messageArr" :key="m.id">
<!--        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp;-->

        <router-link :to="{
          path: '/home/message/detail',
          query: {
            id: m.id,
            title: m.title
          }
        }">
          {{ m.title }}
        </router-link>&nbsp;&nbsp;
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
  }
}
</script>

<style lang="scss" scoped>

</style>