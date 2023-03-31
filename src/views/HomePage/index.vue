<template>
  <div class="home">
    <home-page-cover></home-page-cover>
    <div class="content">
        <post-card></post-card>
        <post-card></post-card>
    </div>
  </div>
</template>

<script>
import PostCard from './components/PostCard'
import HomePageCover from './components/HomePageCover'

export default {
  name: 'HomePage',
  components: {
    PostCard,
    HomePageCover
  }
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    position: relative;
}

.content {
    position: relative;
    margin: 100px auto 0 auto;
    width: 1200px;
}
</style>
