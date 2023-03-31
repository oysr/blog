<template>
    <div class="cover">
        <div class="scene">
            <div ref="layer" class="layer" :style="layerStyle" @mousemove="layerMove">
                <img ref="bgc" :src="bgc" alt="" class="bgc">
            </div>
        </div>
        <div class="wrap"></div>
    </div>
</template>

<script>
export default {
  name: 'HomePageCover',
  data() {
    return {
      bgc: require('@/assets/img/homepage.png'),
      windowInnerWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
  },
  beforeDestroy() {},
  computed: {
    layerStyle() {
      return {
        height: this.windowInnerHeight + 'px'
      }
    }
  },
  methods: {
    layerMove(event) {
      const x = (event.offsetX * -1 / 1.9)
      const y = (event.offsetY * -1 / 3)
      this.$refs.layer.style.transform = `translate3d(${x}px, ${y}px, 0)`
    },
    handleWindowResize() {
      this.windowInnerWidth = window.innerWidth
      this.windowInnerHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
    width: 100%;
    position: relative;
    .scene {
      width: 100%;
      position: relative;
      overflow: hidden;
      .layer {
        width: 100%;
        position: relative;
        transition: all 1s cubic-bezier(0.1, 0.7, 0.7, 1);
        .bgc {
          position: absolute;
          left: 0;
          top: -80px;
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
</style>
