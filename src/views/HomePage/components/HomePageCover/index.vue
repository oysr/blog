<template>
  <div class="cover">
    <div class="scene">
      <curtain-menu @ended="curtainMoveEnded"></curtain-menu>
      <div class="menu-btn" @click="controlCurtainShow">
        <svg-icon
          v-if="!curtainShow"
          icon-class="unfold_curtain"
          className="icon_color"
        ></svg-icon>
        <svg-icon
          v-else
          icon-class="close_curtain"
          className="icon_color"
        ></svg-icon>
      </div>
      <div ref="layer" class="layer" :style="layerStyle" @mousemove="layerMove">
        <img ref="bgc" :src="bgc" alt="" class="bgc" />
      </div>
    </div>
    <div ref="wrap" class="wrap"></div>
  </div>
</template>

<script>
import CurtainMenu from '../CurtainMenu'

export default {
  name: 'HomePageCover',
  components: {
    CurtainMenu
  },
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
  watch: {
    curtainShow(nv) {
      if (!nv) {
        const e = new Event('resize')
        window.dispatchEvent(e)
      }
    }
  },
  computed: {
    layerStyle() {
      return {
        height: this.windowInnerHeight + 'px'
      }
    },
    curtainShow() {
      return this.$store.getters.curtainShow
    }
  },
  methods: {
    layerMove(event) {
      const x = (event.offsetX * -1) / 1.9
      const y = (event.offsetY * -1) / 3
      this.$refs.layer.style.transform = `translate3d(${x}px, ${y}px, 0)`
    },
    handleWindowResize() {
      console.log('------------')
      this.windowInnerWidth = window.innerWidth
      this.windowInnerHeight = window.innerHeight
    },
    // 控制幕布菜单展示与隐藏
    controlCurtainShow() {
      this.$store.dispatch('app/toggleCurtainShow')
    },
    // 子组件通知父组件动画结束
    curtainMoveEnded() {
      // chrome内核下curtain动画结束会使div.wrap出现遮挡区域不正常的bug，更新标签样式可以解决该bug
      console.log(this.$refs.wrap.style.clipPath)
      if (this.$store.getters.device === 'desktop') {
        if (this.$refs.wrap.style.clipPath === '') {
          this.$refs.wrap.style.clipPath = 'polygon(0 0, 25.01% 0, 60% 100%, 0 100%)'
        } else {
          this.$refs.wrap.style.clipPath = ''
        }
      }
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
    background-color: rgba(255, 255, 255, 0.6);
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

.menu-btn {
  position: absolute;
  top: 20px;
  right: 10px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 25px;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  // 禁用选中
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
  &:hover {
    background-color: rgba($color: #fff, $alpha: 0.8);
  }
  .icon_color {
    color: #ee0f0f;
  }
}
</style>
