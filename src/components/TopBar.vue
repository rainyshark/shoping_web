<template>
  <router-view></router-view>
  <div class="TopBar">
    <div class="L_Section">
      <li>
        <router-link to="/">{{ ti1 }}</router-link>
      </li>
      <li>
        <em>|</em><router-link to="/login">{{ ti2 }}</router-link>
      </li>
      <li>
        <em>|</em>
        <router-link to="/register">{{ ti3 }}</router-link>
      </li>
    </div>
    <div class="R_Section">
      <li v-for="(item, index) in lis" :key="index">
        <em>| </em><router-link :to="item.path"> {{ item.title }}</router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TopBar",
  setup() {
    let ti1 = ref("北京 尚品汇欢迎您!");
    let ti2 = ref("登录");
    let ti3 = ref("免费注册");
    let lis = ref([
      { title: "我的订单" },
      { title: "我的购物车", path: "/shopingcar" },
      { title: "我的尚品汇" },
      { title: "尚品汇会员" },
      { title: "企业采购" },
      { title: "关注尚品汇" },
      { title: "合作招商" },
      { title: "商家后台" },
    ]);
    return {
      ti1,
      ti2,
      ti3,
      lis,
    };
  },
};
</script>

<style scoped>
.TopBar {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 30px;
  background-color: #ddd;
  line-height: 30px;
}
a {
  text-decoration: none;
  color: gray;
}
a:hover {
  color: skyblue;
  text-decoration: underline;
}
.L_Section li {
  list-style: none;
  float: left;
  margin-right: 10px;
}
.L_Section li em {
  list-style: none;
  font-style: normal;
  float: left;
  margin-right: 10px;
}
.R_Section li {
  float: left;
  margin-left: 5px;
  list-style: none;
}
.R_Section li em {
  font-style: normal;
}
</style>