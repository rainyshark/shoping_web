<template>
  <div class="SideBar">
    <div class="Center">
      <li
        v-for="(item, index) in my_ico"
        :key="index"
        @mouseover="show(index)"
        @mouseleave="hidden(index)"
        :style="{
          backgroundPositionX: item.posi1 + 'px',
          backgroundPositionY: item.posi2 + 'px',
        }"
      >
        <transition name="stre">
          <span ref="C_Sp" v-show="isShow[index]">{{ item.title }}</span>
        </transition>
      </li>
    </div>
    <div class="Bott">
      <li
        v-for="(item, index) in my_ico2"
        :key="index"
        @mouseover="show2(index)"
        @mouseleave="hidden2(index)"
        :style="{
          backgroundPositionX: item.posi1 + 'px',
          backgroundPositionY: item.posi2 + 'px',
        }"
      >
        <transition name="stre">
          <span ref="B_Sp" v-show="isShow2[index]">{{ item.title }}</span>
        </transition>
      </li>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { getCurrentInstance } from "vue";
export default {
  name: "SideBar",
  setup() {
    let { proxy } = getCurrentInstance();
    let my_ico = ref([
      {
        posi1: "-52",
        posi2: "-1",
        title: "购物车",
      },
      {
        posi1: "-52",
        posi2: "-49",
        title: "我的关注",
      },
      {
        posi1: "-52",
        posi2: "-100",
        title: "我的足迹",
      },
    ]);
    let my_ico2 = ref([
      {
        posi1: "-51",
        posi2: "-250",
        title: "顶部",
      },
      { posi1: "-50", posi2: "-300", title: "反馈" },
    ]);
    let isShow = ref([false, false, false]);
    let isShow2 = ref([false, false]);
    function show(index) {
      isShow.value[index] = true;
      proxy.$refs.C_Sp[index].style.backgroundColor = "red";
    }
    function show2(index) {
      isShow2.value[index] = true;
      proxy.$refs.B_Sp[index].style.backgroundColor = "red";
    }
    function hidden(index) {
      isShow.value[index] = false;
      proxy.$refs.C_Sp[index].style.backgroundColor = "#7a6e6e";
    }
    function hidden2(index) {
      isShow2.value[index] = false;
      proxy.$refs.B_Sp[index].style.backgroundColor = "#7a6e6e";
    }
    return {
      my_ico,
      my_ico2,
      isShow,
      isShow2,
      show,
      show2,
      hidden,
      hidden2,
    };
  },
};
</script>

<style scoped>
.SideBar {
  position: fixed;
  right: 0;
  top: 0;
  width: 29px;
  height: 100vh;
}
.Center {
  height: 108px;
  width: 100%;
  position: fixed;
  top: 45vh;
}
.Center li,
.Bott li {
  list-style: none;
  background-color: #7a6e6e;
  width: 34px;
  height: 34px;
  margin-bottom: 2px;
  background-image: url(http://sph.atguigu.cn/img/cartPanelViewIcons.png);
}
.Center li:hover {
  background-color: red;
  cursor: pointer;
}
.Bott li:hover {
  background-color: red;
  cursor: pointer;
}
.Center span,
.Bott span {
  position: fixed;
  right: 29px;
  background-color: red;
  color: white;
  border-radius: 3px 0 0 3px;
  text-align: center;
  width: 100px;
  line-height: 30px;
  height: 34px;
}
.Bott span {
  width: 50px;
}
.stre-enter-from,
.stre-leave-to {
  transform: translateX(150px);
}
.stre-enter-to,
.stre-leave-from {
  transform: translateX(0px);
}
.stre-enter-active,
.stre-leave-active {
  transition: transform 0.5s;
}
.Bott {
  position: fixed;
  bottom: 0px;
}
</style>