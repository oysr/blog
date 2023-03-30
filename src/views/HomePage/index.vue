<template>
  <div class="home">
    <div class="cover" @mousemove="bgcMove">
        <div class="scene">
            <div class="layer" :style="layerStyle">
                <img ref="bgc" :src="bgc" alt="" :width="bgcStyle.width" class="bgc">
            </div>
        </div>
        <div class="wrap"></div>
    </div>
    <div class="content">
        <post-card></post-card>
    </div>
  </div>
</template>

<script>
import PostCard from './components/PostCard'

export default {
  name: 'HomePage',
  components: {
    PostCard
  },
  data () {
    return {
      bgc: require('@/assets/img/homepage.jpg')
    }
  },
  computed: {
    layerStyle () {
      return {
        width: window.innerWidth + 'px',
        height: window.innerHeight + 'px'
      }
    },
    bgcStyle () {
      return {
        width: (window.innerWidth + 200) + 'px',
        height: (window.innerHeight + 200) + 'px'
      }
    }
  },
  methods: {
    bgcMove (event) {
      const x = (event.offsetX * -1 / 15)
      const y = (event.offsetY * -1 / 5)
      this.$refs.bgc.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    position: relative;
}
.cover {
    width: 100%;
    position: relative;
    .scene {
        .layer {
            overflow: hidden;
            .bgc {
                transition: all 2s cubic-bezier(0.1, 0.7, 0.7, 1);
            }
        }
    }
    @mixin wrap-base {
        pointer-events: none; /* 禁止wrap参与鼠标冒泡 */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .6);
    }
    @media all and (min-width: 768px) {
      .wrap {
        @include wrap-base;
        clip-path: polygon(0 0, 25% 0, 60% 100%, 0 100%);
      }
    }
    @media all and (max-width: 768px) {
      .wrap {
        @include wrap-base;
        // clip-path: polygon(0 0, 25% 0, 60% 100%, 0 100%);
      }
    }
}
.content {
    position: relative;
    margin: 100px auto 0 auto;
    width: 1200px;
}
</style>
