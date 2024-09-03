<template>
  <div class="Main_Layout">
    <div class="L_Li">
      <li
        v-for="(li, index) in lis"
        :key="index"
        @mouseover="show(index)"
        @mouseleave="hidden(index)"
      >
        <h3>
          <router-link to="/goodslist">{{ li }}</router-link>
          <div class="Invisiable" ref="Invi">
            <h4 v-for="(ite, inde) in Myitems[index]" :key="inde">
              <h5>{{ ite }}</h5>
              <li v-for="(itm, ind) in MyLis[inde]" :key="ind">
                <span>
                  {{ itm }}
                  <em>|</em></span
                >
              </li>
            </h4>
          </div>
        </h3>
      </li>
    </div>
    <div class="M_Img flex3">
      <div class="M_Img_LB" @click="cal"></div>
      <transition-group name="yun">
        <img
          src="http://39.98.123.211/group1/M00/03/C6/rBHu8mHhRHeAFFGHAAmcai-tfmo040.png"
          v-if="isShow"
        />
        <img
          src="http://39.98.123.211/group1/M00/03/C6/rBHu8mHhRGGAOXgOAAYtxcnkJgc441.png"
          v-if="!isShow"
        />
        <div class="M_Img_Top">
          <div class="one" @click="chan">
            <li v-show="isShow"></li>
          </div>
          <div class="two" @click="chan">
            <li v-show="!isShow"></li>
          </div>
        </div>
      </transition-group>

      <div class="M_Img_RB" @click="cal"></div>
    </div>
    <div class="R_Section flex1">
      <div class="R_Sec_Top">
        <h4>
          {{ msg }} <span>{{ more }}</span>
        </h4>
        <li v-for="(li, index) in R_li" :key="index">
          {{ li }}
        </li>
      </div>
      <div class="R_Sec_Bot">
        <div class="R_Set_Ico" v-for="(item, index) in R_Ico" :key="index">
          <div
            class="icon"
            :style="{
              backgroundPositionX: position1[index] + 'px',
              backgroundPositionY: position2[index] + 'px',
            }"
          ></div>
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="ad">
        <img src="../assets/ad1.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getCurrentInstance } from "vue";
export default {
  name: "Layout",
  setup() {
    const { proxy } = getCurrentInstance();
    let lis = ref([
      "图书/音像/电子书刊",
      "手机",
      "家用电器",
      "数码",
      "家居家装",
      "电脑办公",
      "厨具",
      "个护化妆",
      "服饰内衣",
      "钟表",
      "鞋靴",
      "母婴",
      "礼品箱包",
      "食品饮料/保健食品",
      "珠宝",
    ]);
    let msg = ref("尚品会快报");
    let more = ref("更多 >");
    let R_li = ref([
      "[特惠]备战开学季 全民半价购数码",
      "[公告]备战开学季 全民半价购数码",
      "[特惠]备战开学季 全民半价购数码",
      "[公告]备战开学季 全民半价购数码",
      "[特惠]备战开学季 全民半价购数码",
    ]);
    let R_Ico = ref([
      "话费",
      "机票",
      "电影票",
      "游戏",
      "彩票",
      "加油站",
      "酒店",
      "火车票",
      "众筹",
      "理财",
      "礼品卡",
      "白条",
    ]);
    let position1 = ref([
      0, -66, -124, -190, 0, -66, -124, -190, 0, -66, -124, -190,
    ]);
    let position2 = ref([
      -4, -4, -5, -5, -75, -75, -75, -75, -150, -150, -147, -147,
    ]);
    let Myitems = ref([
      [
        "电子书刊",
        "音像",
        "英文原版",
        "文艺",
        "少儿",
        "人文社科",
        "经管励志",
        "生活",
        "科技",
        "教育",
        "港台图书",
        "其他",
      ],
      ["手机通讯", "运营商", "手机配件"],
      ["大家电", "厨位大电", "厨房小电", "生活用电", "个户健康", "五金家装"],
      ["摄影摄像", "数码配件", "智能设备", "影音娱乐", "电子教育", "虚拟商品"],
      ["宠物生活", "家纺", "灯具", "生活日用", "家装软饰"],
      [
        "电脑整机",
        "电脑配件",
        "外设产品",
        "游戏设备",
        "网络产品",
        "办公设备",
        "文具/耗材",
        "服务产品",
      ],
      [
        "烹饪锅具",
        "刀剪菜饭",
        "厨房配件",
        "水具道具",
        "餐具",
        "酒店用品",
        "咖啡/咖啡具",
      ],
      [
        "清洁用品",
        "面部护肤",
        "身体护理",
        "口腔护理",
        "女性护理",
        "洗发护发",
        "香水彩妆",
      ],
      ["女装", "男装", "内衣", "洗衣服务", "装饰配件"],
      ["钟表"],
      ["流行男靴", "时尚女靴"],
      [
        "营养辅食",
        "尿裤湿巾",
        "喂养用品",
        "洗护用品",
        "童车童床",
        "寝居服饰",
        "妈妈专区",
        "童装童鞋",
        "安全座椅",
        "奶粉",
      ],
      ["潮流女包", "精品男包", "功能箱包", "礼品", "奢侈品", "婚庆"],
      [
        "地方特产",
        "休闲食品",
        "粮油调味",
        "饮料冲调",
        "视屏礼券",
        "茗茶",
        "进口食品",
      ],
      [
        "木手串/把件",
        "珍珠",
        "时尚饰品",
        "黄金",
        "K金饰品",
        "金银投资",
        "银饰",
        "钻石",
        "翡翠玉石",
        "税金玛瑙",
        "彩宝",
        "铂金",
      ],
    ]);
    let MyLis = ref([
      ["电子书", "网络原创", "数字杂志", "多媒体图书"],
      ["音乐", "影视", "教育音像"],
      ["少儿", "商务投资", "英语", "学习与考试", "文学传记", "励志"],
      ["小说", "文学", "青春文学", "传记", "艺术"],
      ["少儿", "0-2岁", "3-6岁", "7-10岁", "11-14岁"],
      [
        "历史",
        "哲学",
        "国学",
        "政治/军事",
        "法律",
        "人文社科",
        "心理学",
        "文化",
        "社会科学",
      ],
      ["经济", "金融与投资", "管理励", "志与成功"],
      ["生活", "健身与保健", "家庭与育儿", "旅游", "烹饪美食"],
      [
        "工业技术",
        "科普读物",
        "建筑",
        "医学",
        "科学与自然",
        "计算机与互联网",
        "电子通信",
      ],
      ["中小学教辅", "教育与考试", "外语学习", "大中专教材", "字典词典"],
      ["艺术/设计/收藏", "经济管理", "文化/学术", "少儿"],
      ["工具书", "杂志/期刊", "套装书"],
    ]);
    let isShow = ref(true);

    onMounted(() => {
      setInterval(() => {
        isShow.value = !isShow.value;
      }, 8000);
    });

    function show(index) {
      proxy.$refs.Invi[index].style.display = "block";
    }
    function hidden(index) {
      proxy.$refs.Invi[index].style.display = "none";
    }
    function cal() {
      isShow.value = !isShow.value;
    }
    function chan() {
      isShow.value = !isShow.value;
    }
    return {
      lis,
      msg,
      more,
      R_li,
      R_Ico,
      position1,
      position2,
      Myitems,
      MyLis,
      isShow,

      show,
      hidden,
      cal,
      chan,
    };
  },
};
</script>

<style scoped>
.flex1 {
  flex: 1;
}
.flex3 {
  flex: 3;
}
.Main_Layout {
  height: 455px;
  width: 1200px;
  display: flex;
  background-color: #ddd;
}
.L_Li {
  position: relative;
  width: 210px;
}
.L_Li li {
  list-style: none;
  text-align: left;
  padding: 0 20px;
  height: 30px;
}
.L_Li li:nth-child(n):hover {
  background-color: #fff;
}

.L_Li li a {
  display: inline-block;
  width: 100%;
  font-size: 14px;
  text-decoration: none;
  color: black;
  font-weight: normal;
}

.M_Img {
  position: relative;
  overflow: hidden;
  border: 2px dashed orange;
  padding: 3px;
}
.M_Img img {
  width: 100%;
  height: 100%;
}
.M_Img_Top {
  position: absolute;
  display: flex;
  top: 5px;
  left: 310px;
  width: 100px;
  height: 20px;
  background-color: #fff;
}
.M_Img_Top div {
  width: 50%;
  height: 100%;
}
.M_Img_Top li {
  width: 100%;
  height: 100%;
  background-color: #ddd;
  list-style: none;
}

.yun-enter-from,
.yun-leave-to {
  /* transform: translateX(0px); */
  opacity: 0;
}

.yun-enter-to,
.yun-leave-from {
  /* transform: translateX(-1000px); */
  opacity: 1;
}
.yun-enter-active,
.yun-leaveactive {
  transition: opacity 2s ease;
}
.M_Img .M_Img_LB {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 206px;
  z-index: 1;
  background-color: #fff;
  border-radius: 0 20px 20px 0;
}
.M_Img .M_Img_RB {
  position: absolute;
  right: 2px;
  top: 206px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px 0 0 20px;
}
.Invisiable {
  position: absolute;
  z-index: 1;
  min-height: 455px;
  border: 2px solid #fff;
  background-color: rgba(118, 113, 113, 0.881);
  left: 210px;
  top: 0;
  float: right;
  width: 744px;
  display: none;
}
.Invisiable h4 {
  margin: 12px 0;
  padding: 6px 0;
  width: 650px;
  height: 25px;
  line-height: 25px;
}
.Invisiable h5 {
  vertical-align: middle;
  text-align: right;
  margin-right: 50px;
  float: left;
  width: 90px;
}

.Invisiable li {
  float: left;
  padding: 0 0;
  list-style: none;
  text-align: left;
  font-size: 12px;
  height: 25px;
  line-height: 25px;
}
.Invisiable em {
  font-style: normal;
  margin: 0 4px;
}
.R_Section {
  display: flex;
  flex-direction: column;
}
.R_Sec_Top {
  line-height: 33px;
}
.R_Sec_Top h4 {
  margin: 5px 5px 0;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(135, 131, 131, 0.178);
}
.R_Sec_Top span {
  font-size: 12px;
  float: right;
}
.R_Sec_Top li {
  padding: 5px 15px;
  font-size: 12px;
  list-style: none;
  height: 20px;
  line-height: 20px;
}
.R_Sec_Bot {
  display: grid;
  border-bottom: 1px solid black;
  grid-template-columns: repeat(4, 61px);
  grid-template-rows: repeat(3, 65px);
}
.R_Set_Ico {
  display: flex;
  border-left: 1px solid black;
  flex-direction: column;
  justify-content: space-around;
}
.R_Set_Ico:nth-child(4n) {
  border-right: 1px solid black;
}
.R_Set_Ico span {
  text-align: center;
}
.icon {
  width: 59px;
  height: 40px;
  border-top: 1px solid black;
  background-image: url(../assets/icons.png);
}
.ad img {
  width: 100%;
  height: 60px;
}
</style>