<template>
    <div class="post-card">
        <div class="img-box">
            <img :src="img" alt="">
        </div>
        <div class="info"></div>
    </div>
</template>

<script>
export default {
  name: 'PostCard',
  data() {
    return {
      img: require('@/assets/img/img01.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
    position: relative;
    text-align: left;
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
</style>
