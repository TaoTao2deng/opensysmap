<template>
  <div
    class="box"
    v-loading="loading"
    element-loading-text="欢迎你的到来"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    customClass="loading"
  ></div>
</template>
<script>
/***
 * 欢迎页
 */
import axios from "axios";
import { setTimeout } from "timers";
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
}
</style>