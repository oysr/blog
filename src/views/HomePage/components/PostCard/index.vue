<template>
  <div class="post-card img-center-align" :class="classObj">
    <div class="img-box">
      <img :src="img" alt="" />
    </div>
    <div class="info"></div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    pindex: {
      type: Number,
      required: true
    },
    imgName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      img: require(`@/assets/img/${this.imgName}`)
    }
  },
  computed: {
    classObj() {
      return {
        'img-left-align': this.pindex % 2 === 0,
        'img-right-align': this.pindex % 2 !== 0
      }
    },
    device() {
      return this.$store.getters.device
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  position: relative;
  width: 100%;
  @mixin img-box-base {
    width: 680px;
    height: 440px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
    }
  }
  @media all and (min-width: 1200px) {
    .img-box {
      @include img-box-base;
      display: inline-block;
    }
    .info {
      width: 500px;
      height: 400px;
      position: absolute;
      top: 20px;
      left: 620px;
      padding: 0 0 0 80px;
    }
  }
  @media all and (max-width: 1200px) {
    .img-box {
      @include img-box-base;
      margin: 0 auto;
    }
    .info {
      width: 96%;
      height: 200px;
      margin: 0 auto 10px auto;
      box-sizing: border-box; // 加上该样式，在保证盒子大小不变的前提下会自动计算盒子的内容区宽度
      padding: 20px 40px;
      position: static;
      // border: 1px solid #333;
    }
  }
}
@media all and (min-width: 1200px) {
  .img-left-align {
    text-align: left;
  }
  .img-right-align {
    text-align: right;
  }
}
@media all and (max-width: 1200px) {
  .img-center-align {
    text-align: center;
  }
}
</style>
