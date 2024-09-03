<template>
  <div class="Goods_List">
    <div class="Bread">
      <a href="#">{{ Bread }}</a
      ><em>|</em>
    </div>
    <div class="Warp">
      <div class="Warp_Log">
        <div class="W_L">{{ Brand }}</div>
        <div class="W_R">
          <li v-for="(item, index) in Brand_Li" :key="index">
            {{ item }}
          </li>
        </div>
      </div>
      <li class="Warp_Bott" v-for="(item, index) in Keys" :key="index">
        <div class="Warp_Down">{{ item.key }}</div>
        <span
          class="Warp_Val"
          v-for="(ite, index) in Keys[index].val"
          :key="index"
        >
          {{ ite }}
        </span>
      </li>
    </div>
    <div class="Data_Lis">
      <div class="Binner">
        <a href="#">{{ b_msg }}</a>
        <a href="#" v-for="(item, index) in binner_msg" :key="index"
          >{{ item }}
        </a>
      </div>
      <div class="yui">
        <div class="y_inner" v-for="(ite, index) in y_in" :key="index">
          <div class="y_img">
            <img :src="ite.mypath" />
          </div>
          <div class="y_price">{{ ite.price }}</div>
          <a href="#" class="y_title">{{ ite.title }}</a>
          <div class="y_remark">已有<i>2000</i>人评价</div>
          <div class="y_opra">
            <a href="#">{{ ite.selfstore }}</a>
          </div>
        </div>
      </div>
      <div class="Down">
        <li class="Down_li" v-for="(item, index) in Down_msg" :key="index">
          {{ item }}
        </li>
      </div>
    </div>
    <GuessLike></GuessLike>
  </div>
</template>

<script>
import { ref } from "vue";
import GuessLike from "../components/GuessLike";

export default {
  name: "Goods",
  setup() {
    let Bread = ref("全部结果");
    let Brand = ref("品牌");
    let Brand_Li = ref([
      "小米",
      "苹果",
      "华为",
      "VIVO",
      "联想",
      "海信",
      "戴尔",
      "AIRI",
    ]);
    let Keys = ref([
      {
        key: "屏幕",
        val: ["6.8 寸", "6.5 寸"],
      },
      {
        key: "价格",
        val: ["1000-1699", "2800-4499", "500-999"],
      },
      {
        key: "CPU型号",
        val: ["骁龙730G", "骁龙855", "麒麟990"],
      },
      {
        key: "分辨率",
        val: ["4K超高清"],
      },
      {
        key: "品牌",
        val: ["三星", "联想", "苹果"],
      },
      {
        key: "系统",
        val: ["Android", "Ios"],
      },
      {
        key: "分辨率",
        val: ["4K超高清"],
      },
      {
        key: "手机内存",
        val: ["512G", "64G"],
      },
      {
        key: "颜色",
        val: ["蓝色", "金色"],
      },
    ]);
    let b_msg = ref("综合");
    let binner_msg = ref(["价格", "新品", "评价"]);
    let y_in = ref([
      {
        mypath:
          "http://39.98.123.211/group2/M00/00/02/rBHu8l-rgfWAbqkuAAENKBtJukQ551.jpg",
        price: "¥ 8197.0",
        title:
          "Apple iPhone 12 (A2404) 64GB 蓝色 支持移动联通电信5G 双卡双待手机",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/00/01/rBHu8l-rgJqAHPnoAAF9hoDNfsc505.jpg",
        price: "¥ 8197.0",
        title: "Redmi 10X 4G Helio G85游戏芯 8GB+128GB 明月灰 游戏智能手机 ",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/00/02/rBHu8l-sklaALrngAAHGDqdpFtU741.jpg",
        price: "¥ 8197.0",
        title: "华为 HUAWEI P40 麒麟990 5G SoC芯片 6GB+128GB亮黑色全网通5G手机",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/00/02/rBHu8l-sklaALrngAAHGDqdpFtU741.jpg",
        price: "¥ 8197.0",
        title: "华为 HUAWEI P40 麒麟990 5G SoC芯片 6GB+128GB亮黑色全网通5G手机",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/00/02/rBHu8l-rgfWASR1YAADsOUYB-2g312.jpg",
        price: "¥ 8197.0",
        title: "华为 HUAWEI P40 麒麟990 5G SoC芯片 6GB+128GB冰霜银全网通5G手",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/02/DA/rBHu8mGxO7mAIZosAACYibCV0ks310.jpg",
        price: "¥ 8197.0",
        title:
          "Apple iPhone 12 (A2404) 64GB 白色 支持移动联通电信5G 双卡双待手机",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/00/01/rBHu8l-rfvmAcbl2AAFopp2WGBQ404.jpg",
        price: "¥ 6999.0",
        title: "小米10 至尊纪念版 双模5G 骁龙865 120W快充 12GB+256GB 陶瓷黑 游",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg",
        price: "¥ 5999.0",
        title: "小米10 至尊纪念版 双模5G 骁龙865 120W快充 12GB+256GB 陶瓷黑 游",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/00/01/rBHu8l-rgJqAHPnoAAF9hoDNfsc505.jpg",
        price: "¥ 999.0",
        title: "Redmi 10X 4G Helio G85游戏芯 4GB+128GB 冰雾白 游戏智能手机 ",
        selfstore: "自营",
      },
      {
        mypath:
          "http://39.98.123.211/group2/M00/02/DA/rBHu8mGxO7mAIZosAACYibCV0ks310.jpg",
        price: "¥ 7777.0",
        title:
          "LG gram 2021款16英寸轻薄本 16_10大画面 笔记本电脑(11代i5 16G 512",
        selfstore: "自营",
      },
    ]);
    let Down_msg = ref(["上一页", "1", "2", "3", "4", "5", "6", "下一页"]);
    return { Bread, Brand, Brand_Li, Keys, b_msg, binner_msg, y_in, Down_msg };
  },
  components: {
    GuessLike,
  },
};
</script>

<style scoped>
.Goods_List {
  height: 1820px;
  width: 1200px;
}
.Bread {
  height: 24px;
  margin: 5px 0;
}
.Bread a {
  color: #666666;
  text-decoration: none;
}
.Bread a:hover {
  text-decoration: underline;
  color: skyblue;
}
.Bread em {
  color: #666666;
  margin-left: 5px;
}
.Warp {
  list-style: none;
  height: 502px;
}
.Warp div {
  width: 125px;
  text-align: center;
}
.Warp .Warp_Log {
  display: flex;
  width: 1200px;
  height: 123px;
}
.Warp .Warp_Log .W_L {
  border: 1px solid black;
  background-color: #ddd;
  line-height: 123px;
  width: 126.5px;
}
.Warp .Warp_Log .W_R {
  width: 1083px;
  border: 1px solid #666666;
  border-left: none;
  display: flex;
  align-items: center;
}
.Warp .Warp_Log .W_R li {
  height: 55px;
  width: 108px;
  line-height: 55px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid black;
  border-left: none;
}
.Warp .Warp_Log .W_R li:first-child {
  margin-left: 20px;
  border-left: 1px solid black;
}
.Warp_Down {
  text-align: center;
  line-height: 37px;
  width: 123px;
  height: 37px;
  border-right: 1px solid black;
  background-color: #ddd;
}
.Warp_Bott {
  border: 1px solid black;
  border-top: none;
  display: flex;
}
.Warp_Val {
  display: inline-block;
  line-height: 37px;
  margin: 0 10px;
}
.Data_Lis {
  height: 905px;
}
.Binner {
  height: 40px;
  border: 1px solid black;
}
.Binner a {
  display: inline-block;
  margin-right: 5px;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  color: #666666;
  width: 60px;
  height: 40px;
}
.Binner a:first-child {
  background-color: #e1251b;
  color: white;
}
.Binner a:first-child:hover {
  background-color: #ddd;
  color: #666666;
}
.yui {
  display: grid;
  margin-top: 12px;
  grid-template-columns: repeat(5, 232px);
  grid-template-rows: repeat(2, 408px);
  gap: 10px;
  height: 836px;
}
.y_inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.y_inner:hover {
  box-shadow: 1px 1px 10px 6px #ddd;
}
.y_img {
  width: 80%;
  height: 215px;
}
.y_img img {
  width: 100%;
  height: 100%;
}
.y_price {
  width: 200px;
  height: 28px;
  font-size: 18px;
  color: #c81623;
  text-align: left;
}
.y_title {
  display: -webkit-box;
  width: 200px;
  text-decoration: none;
  color: #666666;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 15px;
}
.y_remark {
  width: 200px;
  height: 22px;
}
.y_remark i {
  font-style: normal;
  color: #646fb0;
  font-weight: 700;
}
.y_opra {
  display: flex;
  justify-content: center;
  width: 200px;
  margin-top: 20px;
}
.y_opra a {
  display: inline-block;
  text-decoration: none;
  color: red;
  border: 1px solid #c81623;
  text-align: center;
  line-height: 25px;
  padding: 2px;
  height: 25px;
  width: 85px;
  border-radius: 2px;
}
.Down {
  width: 1200px;
  height: 66px;
  display: flex;
  justify-content: center;
}
.Down_li {
  height: 39px;
  width: 46px;
  border: 1px solid #ddd;
  margin: 0 2px;
  list-style: none;
  text-align: center;
  line-height: 39px;
}
.Down_li:first-child,
.Down_li:last-child {
  width: 81px;
}
.Down_li:nth-child(2) {
  border: 1px solid rgba(255, 0, 0, 0.418);
  background-color: rgba(255, 0, 0, 0.176);
  color: red;
}
</style>