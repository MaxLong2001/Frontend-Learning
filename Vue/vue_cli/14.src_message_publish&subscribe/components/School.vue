<template>
  <div class="school">
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'School',
  data() {
    return {
      name: 'Tsinghua University',
      address: 'Haidian, Beijing',
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('studentName', (msg, data)=>{
      console.log('in school: ', msg, data)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>