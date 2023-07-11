<template>
  <div id="app">
    <MyAnimate/>
    <Transit/>
    <ThirdPartyAnimate/>
  </div>
</template>

<script>
import MyAnimate from "@/components/Animate.vue";
import Transit from "@/components/Transit.vue";
import ThirdPartyAnimate from "@/components/ThirdPartyAnimate.vue";

export default {
  name: 'App',
  components: {MyAnimate, Transit, ThirdPartyAnimate},
}
</script>

<style>
</style>
