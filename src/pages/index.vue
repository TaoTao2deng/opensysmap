<template>
  <div class="box">
    <van-loading class="loading" size="50px" color="#1989fa" vertical>欢迎你的到来</van-loading>
  </div>
</template>
<script>
/***
 * 欢迎页
 */
import axios from "axios";
export default {
  data() {
    return {
      data1: null,
      loading: true
    };
  },
  methods: {
    init() {
      // 请求数据
      setTimeout(() => {
        this.$router.replace("/map");
      }, 5000);
    }
  },
  created() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /deep/ .van-loading__text {
      color: #1989fa;
    }
  }
}
</style>