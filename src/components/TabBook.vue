<template>
  <div class="TabBook">
    <div class="Tab_Top">
      <div class="Inner_Box" v-for="(item, index) in myitems" :key="index">
        <div
          class="Inner_Ico"
          :style="{
            backgroundPositionX: item.position + 'px',
          }"
        ></div>
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="Tab_Bot">
      <div class="Bot_Inner" v-for="(item, index) in 4" :key="index">
        <img :src="bot_msg.mypath" />
        <div class="Info">
          <a href="#">
            {{ bot_msg.mymsg }}
          </a>
        </div>
        <div class="But">
          <span>{{ bot_msg.myprice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TabBook",
  setup() {
    let myitems = ref([
      { position: 33, title: "热卖排行" },
      { position: 0, title: "特价排行" },
      { position: 0, title: "新品排行" },
    ]);
    let bot_msg = ref({
      mypath: "http://sph.atguigu.cn/img/1.jpg",
      mymsg:
        "【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机",
      myprice: "定金：¥100.00",
    });
    return { myitems, bot_msg };
  },
};
</script>

<style scoped>
.TabBook {
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 432px;
}
.Tab_Top {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ddd;
}
.Inner_Box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 18px;
}
.Inner_Box:first-child {
  color: red;
}
.Inner_Ico {
  width: 32px;
  height: 35px;
  background: url(../assets/bg0.png);
}
.Tab_Bot {
  display: flex;

  justify-content: space-around;
  height: 340px;
  padding: 10px;
}
.Bot_Inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 271px;
  height: 330px;
  font-size: 14px;
  border: 1px solid red;
}

.Bot_Inner img {
  width: 200px;
  height: 200px;
}
.Info {
  width: 260px;
  height: 50px;
}
.Info a {
  display: inline-block;
  text-decoration: none;
  color: black;
  line-height: 25px;
}
.But {
  display: flex;
  justify-content: start;
  height: 40px;
  width: 100%;
  line-height: 40px;
  font-size: 20px;
  color: red;
}
</style>