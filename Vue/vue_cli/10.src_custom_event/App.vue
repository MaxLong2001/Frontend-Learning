<template>
  <div class="app">
    <h1>{{ msg }} Student Name: {{ studentName }}</h1>
    <School :getSchoolName="getSchoolName"/>
    <hr/>
    <!--    <Student v-on:buaa="getStudentName"/>-->
    <!--    <Student @buaa="getStudentName"/>-->
    <!--    <Student @buaa.once="getStudentName"/>-->

    <Student ref="student" @click.native="showSomething"/>
    <hr/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from "@/components/School.vue";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Student,
    School
  },
  data() {
    return {
      msg: 'Hello Vue!',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App get School Name: ', name)
    },
    getStudentName(name) {
      console.log('App get Student Name: ', name)
      this.studentName = name
    },
    showSomething() {
      alert('Show Something')
    }
  },
  mounted() {
    this.$refs.student.$on('buaa', (name) => {
      console.log('App get Student Name: ', name)
      this.studentName = name
    })
    // this.$refs.student.$on('buaa', this.getStudentName)
    // this.$refs.student.$once('buaa', this.getStudentName)
  }
}
</script>

<style>
.app {
  background-color: #eee;
}
</style>