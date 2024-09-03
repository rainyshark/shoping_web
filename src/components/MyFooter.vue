<template>
  <div class="Footer">
    <div class="Mod_List">
      <li v-for="(ite, index) in Title" :key="index">
        <h4>{{ ite }}</h4>
        <span v-for="(it, ind) in Data" :key="ind"> {{ it[ind] }} </span>
      </li>
      <div>
        <h4>帮助中心</h4>

        <img src="../assets/myQQ.jpg" alt="" />
      </div>
    </div>
    <div class="CopyRight">
      <div class="CR_LI">
        <li v-for="(item, index) in lidata" :key="index">
          {{ item }}<em>|</em>
        </li>
      </div>
      <div class="CR_P">
        <p>{{ Add_Id[0] }}</p>
        <p>{{ Add_Id[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyFooter",
  setup() {
    let Title = ref([
      "购物指南",
      "配送方式",
      "支付方式",
      "售后服务",
      "特色服务",
    ]);
    let Data = ref([
      ["购物流程", "上门自提", " 货到付款", "售后政策", "夺宝岛"],
      ["会员介绍", "211限时达", " 在线支付", "价格保护", "DIY装机"],
      ["生活旅行/团购", "配送服务查询", "分期付款 ", "退款说明", "延保服务"],
      ["常见问题", "配送费收取标准", "邮局汇款 ", "返修/退换货", "尚品汇E卡"],
      ["购物指南", "海外配送", " 公司转账", "取消订单", "尚品汇通信"],
    ]);

    let lidata = ref([
      "关于我们",
      "联系我们",
      "关于我们",
      "商家入驻",
      "营销中心",
      "友情链接",
      "关于我们",
      "营销中心",
      "友情链接",
      "关于我们",
    ]);
    let Add_Id = ref([
      "地址：北京市昌平区宏福科技园综合楼6层",
      "京ICP备19006430号",
    ]);
    return { Title, Data, lidata, Add_Id };
  },
};
</script>

<style scoped>
.Footer {
  margin-top: 20px;
  width: 1200px;
  height: 360px;
  background-color: #ddd;
}
.Mod_List {
  display: flex;
  justify-content: space-around;
  width: 1000px;
  height: 187px;
  margin: 0 auto;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.438);
}
.Mod_List h4 {
  height: 50px;
  line-height: 50px;
}
.Mod_List li {
  display: flex;
  flex-direction: column;
  width: 183px;
  height: 183px;
  list-style: none;
}

.CopyRight {
  width: 1000px;
  height: 95px;
  margin: 0 auto;
  padding: 20px;
}
.CR_LI {
  width: 900px;
  height: 23px;
  margin: 0 auto;
}
.CopyRight li {
  float: left;
  list-style: none;
}
.CopyRight li em {
  font-style: normal;
  margin: 0 10px;
}
.CopyRight .CR_LI li:last-child em {
  display: none;
}
.CR_P {
  text-align: center;
}
.CR_P p {
  padding: 10px;
}
</style>
