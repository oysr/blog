<template>
  <transition name="curtain" @after-leave="afterLeave">
    <div v-if="curtainShow" class="curtain-menu">
      <div class="header"></div>
      <div class="body">
        <div class="bc">
          <span class="first-title" @click="dispatch">昨日</span>
          <span v-if="isDesktop" class="second-title"
            >“想说却还没说的 还很多”</span
          >
        </div>
        <div class="bc">
          <span class="first-title">今日</span>
          <span v-if="isDesktop" class="second-title"
            >“不知疲倦地翻越 每一座山丘”</span
          >
        </div>
        <div class="bc">
          <span class="first-title">来日</span>
          <span v-if="isDesktop" class="second-title"
            >“不自量力地还手 直至死方休”</span
          >
        </div>
      </div>
      <div class="foot">
        <span>{{ footText }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CurtainMenu',
  data() {
    return {
      footText: '乘于浪尖，覆于明月'
    }
  },
  computed: {
    curtainShow() {
      return this.$store.getters.curtainShow
    },
    isDesktop() {
      return this.$store.getters.device === 'desktop'
    }
  },
  methods: {
    afterLeave(el) {
      this.$emit('ended')
    },
    dispatch() {
      console.log('路由跳转')
    }
  }
}
</script>

<style lang="scss" scoped>
.curtain-menu {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  background-color: #fff;
  .header,
  .foot {
    height: 50px;
  }
  .body {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    .bc {
      font-family: KaiTi;
      cursor: default;
      .first-title {
        cursor: pointer;
        font-size: 3rem;
        display: inline-block;
        color: rgba($color: #6d6d6d, $alpha: 1);
        &:hover {
          color: rgba($color: #000000, $alpha: 1);
        }
      }
      .second-title {
        font-size: 1.5rem;
        display: block;
      }
    }
  }
  .foot {
    font-family: KaiTi;
    font-size: 1.2rem;
  }
}
// 进入：初始状态
.curtain-enter {
  transform: translateY(-100%);
}
// 进入：末状态
.curtain-enter-to {
  transform: translateY(0);
}
// 进入：动画
.curtain-enter-active {
  transition: 0.8s;
}
// 离开：初始状态
.curtain-leave {
  transform: translateY(0);
}
// 离开：末状态
.curtain-leave-to {
  transform: translateY(-100%);
}
// 离开：动画
.curtain-leave-active {
  transition: 0.8s;
}
</style>
