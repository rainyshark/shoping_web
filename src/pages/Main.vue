<template>
  <TopBar></TopBar>
  <Contain></Contain>
  <Nav></Nav>
  <Layout></Layout>
  <Recomend></Recomend>
  <TabBook></TabBook>
  <GuessLike></GuessLike>
  <Floore>
    <template v-slot:one>
      <h3 class="one">{{ msg1 }}</h3>
    </template>
  </Floore>
  <Floore>
    <template v-slot:two>
      <h3 class="two">{{ msg2 }}</h3>
    </template>
  </Floore>
  <BlockGray></BlockGray>
  <MyFooter></MyFooter>
</template>

<script>
import { ref } from "vue";
import TopBar from "../components/TopBar";
import Contain from "../components/Contain";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import Recomend from "../components/Recomend";
import TabBook from "../components/TabBook";
import GuessLike from "../components/GuessLike";
import Floore from "../components/Floore";
import BlockGray from "../components/BlockGray";
import MyFooter from "../components/MyFooter";
import SideBar from "../components/SideBar";
export default {
  name: "Main",
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
  setup() {
    let msg1 = ref("家用电器");
    let msg2 = ref("手机通讯");
    return { msg1, msg2 };
  },
};
</script>

<style>
</style>