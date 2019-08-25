<template>
  <div></div>
</template>
<script>
/***
 * 欢迎页
 */
import axios from "axios";
export default {
  data() {
    return {
      data1: null
    };
  },
  methods: {
    init() {
      console.dir();
      axios.get("/data/data.json").then(data => {
        console.log(data);
      });
    }
  },
  created() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
</style>