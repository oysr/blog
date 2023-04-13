<template>
  <transition name="curtain" @after-leave="afterLeave">
    <div v-if="curtainShow" class="curtain-menu"></div>
  </transition>
</template>

<script>
export default {
  name: 'CurtainMenu',
  data() {
    return {}
  },
  computed: {
    curtainShow() {
      return this.$store.getters.curtainShow
    }
  },
  methods: {
    afterLeave(el) {
      this.$emit('ended')
    }
  }
}
</script>

<style lang="scss" scoped>
.curtain-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  background-color: #fff;
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
