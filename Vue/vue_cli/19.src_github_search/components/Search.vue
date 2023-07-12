<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyword"
          @keyup.enter="search"
      />&nbsp;
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      this.$bus.$emit('updateList', {
        isInit: false,
        isLoading: true,
        errMsg: '',
        users: []
      })
      if (this.keyword === '') {
        alert('Please enter the name you search')
        return
      }
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
          .then(response => {
            this.$bus.$emit('updateList', {
              isInit: false,
              isLoading: false,
              errMsg: '',
              users: response.data.items
            })
          })
          .catch(error => {
            console.log(error.message)
            this.$bus.$emit('updateList', {
              isInit: false,
              isLoading: false,
              errMsg: error.message,
              users: []
            })
          })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>