<template>
  <div class="app-wrapper">
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppBody from './components/AppBody'

export default {
  name: 'PageLayout',
  components: {
    AppHeader,
    AppBody
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
