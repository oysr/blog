<template>
    <div class="post-card" :class="classObj">
        <div class="img-box">
            <img :src="img" alt="">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
    position: relative;
    .img-box {
        display: inline-block;
        width: 680px;
        height: 440px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .info {
        width: 500px;
        height: 400px;
        position: absolute;
        top: 20px;
        left: 660px;
        padding: 0 80px;
    }
}
.img-left-align {
    text-align: left;
}
.img-right-align {
    text-align: right;
}
</style>
