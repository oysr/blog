<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import media from '@/minxin/media'

export default {
  mixins: [media],
  created() {
    const host = location.host
    this.$globalValue.changeLocalURL(host)
    this.$changeAxiosBaseURL()
  },
  mounted() {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
