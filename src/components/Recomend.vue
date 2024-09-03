<template>
  <div class="recom">
    <div class="L_img">
      <span>{{ today }}</span>
    </div>
    <div class="R_Ad flex1" v-for="(ite, index) in mypath" :key="index">
      <img :src="mypath[index]" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Recomend",
  setup() {
    let mypath = ref([
      "http://sph.atguigu.cn/img/today01.png",
      "http://sph.atguigu.cn/img/today02.png",
      "http://sph.atguigu.cn/img/today03.png",
      "http://sph.atguigu.cn/img/today04.png",
    ]);
    let today = ref("今日推荐");
    return { mypath, today };
  },
};
</script>

<style scoped>
.flex1 {
  flex: 1;
}
.recom {
  width: 1200px;
  height: 165px;
  display: flex;
  margin: 10px 0;
}
.L_img {
  width: 200px;
  height: 100%;
  background: url(../assets/clock.png) no-repeat center 30%;
  background-color: #ddd;
  text-align: center;
  line-height: 230px;
  font-size: 18px;
  color: white;
}
</style>