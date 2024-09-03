<template>
  <div class="w">
    <router-view></router-view>
  </div>
  <SideBar></SideBar>
</template>

<script>
import TopBar from "./components/TopBar";
import Contain from "./components/Contain";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Recomend from "./components/Recomend";
import TabBook from "./components/TabBook";
import GuessLike from "./components/GuessLike";
import Floore from "./components/Floore";
import BlockGray from "./components/BlockGray";
import MyFooter from "./components/MyFooter";
import SideBar from "./components/SideBar";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    TopBar,
    Contain,
    Nav,
    Layout,
    Recomend,
    TabBook,
    GuessLike,
    Floore,
    BlockGray,
    MyFooter,
    SideBar,
  },
};
</script>
<style>
* {
  margin: 0 0;
  padding: 0 0;
}
.w {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

.one,
.two {
  display: inline-block;
  width: 80px;
  margin-top: 9px 0;
  color: #c81623;
}
</style>;
