<template>
  <div class="BlockGray">
    <img :src="it" alt="" v-for="(it, index) in imgs" :key="index" />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "BlockGray",
  setup() {
    let imgs = ref([
      "http://sph.atguigu.cn/img/brand_21.png",
      "http://sph.atguigu.cn/img/brand_03.png",
      "http://sph.atguigu.cn/img/brand_05.png",
      "http://sph.atguigu.cn/img/brand_07.png",
      "http://sph.atguigu.cn/img/brand_09.png",
      "http://sph.atguigu.cn/img/brand_11.png",
      "http://sph.atguigu.cn/img/brand_13.png",
      "http://sph.atguigu.cn/img/brand_15.png",
      "http://sph.atguigu.cn/img/brand_17.png",
      "http://sph.atguigu.cn/img/brand_19.png",
    ]);
    return { imgs };
  },
};
</script>

<style>
.BlockGray {
  height: 37px;
  width: 1220px;
  margin: 10px 0;
  padding: 15px 0;
}
.BlockGray img {
  padding: 10px;
  border-right: 1px solid black;
}
.BlockGray img:last-child {
  border-right: none;
}
</style>