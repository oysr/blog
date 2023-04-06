<template>
  <div class="home">
    <home-page-cover></home-page-cover>
    <div class="content">
      <post-card
        v-for="(pc, index) in postCardList"
        :key="index"
        :pindex="index"
        :imgName="pc.img"
      ></post-card>
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
  },
  data() {
    return {
      postCardList: [
        {
          img: 'img01.jpg'
        },
        {
          img: 'img01.jpg'
        },
        {
          img: 'img01.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  position: relative;
}

@mixin content-base {
  position: relative;
  margin: 100px auto 0 auto;
}

@media all and (min-width: 1200px) {
  .content {
    @include content-base;
    width: 1200px;
  }
}

@media all and (max-width: 1200px) {
  .content {
    @include content-base;
    width: 100%;
  }
}
</style>
