<template>
  <div class="Nav">
    <div class="L_Top">
      <h4>全部商品分类</h4>
    </div>
    <div class="L_R">
      <li v-for="(item, index) in lis" :key="index">
        {{ item }}
      </li>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Nav",
  setup() {
    let lis = ref([
      "服装城",
      "美妆馆",
      "尚品汇超市",
      "全球购",
      "闪购",
      "团购",
      "有趣",
      "秒杀",
    ]);
    return {
      lis,
    };
  },
};
</script>

<style scoped>
.Nav {
  display: flex;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #e1251b;
}
.L_Top {
  text-align: center;
  width: 210px;
  background-color: #e1251b;
  color: white;
}
.L_R li {
  list-style: none;
  float: left;
  margin: 0 20px;
}
</style>