<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'3'"></MyNav>
    <div class="container" >
      <div class="checkin1">
          <p class="box-card">
            <span>忠门籍</span><span>总人数：<span style="font_weight:300px;">{{number}}人</span></span>
          </p>
          <div class="bottom_content">
            <div class="bottom_content1">
              <div class="bottom_content2"><span>山亭</span><span>|</span><span>总人数：{{number1}}人</span></div>
              <div class="bottom_content2"><span>忠门</span><span>|</span><span>总人数：{{number2}}人</span></div>
            </div>
            <div class="bottom_content1">
              <div class="bottom_content2"><span>东浦</span><span>|</span><span>总人数：{{number3}}人</span></div>
              <div class="bottom_content2"><span>月塘</span><span>|</span><span>总人数：{{number4}}人</span></div>
            </div>
          </div>

      </div>
      <div class="checkin1">
          <p class="box-card">
            <span>开启签到</span>
          </p>
          <div class="bottom_content">
            <div class="bottom_content3">
              <div class="bottom_content4">
                <div class="bottom_content4_title">开启时间</div>
                <div class="select-content">
                  <el-select class="select1" v-model="value11" placeholder="上午">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                  </el-select>
                  <el-select class="select2" v-model="value12" placeholder="1">
                  <el-option
                    v-for="item in hour1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                  </el-select>
                  <el-select class="select2" v-model="value13" placeholder="1">
                  <el-option
                    v-for="item in minute1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                  </el-select>
                </div>
              </div>
              <div class="bottom_content4">
                <div class="bottom_content4_title">结束时间</div>
                <div class="select-content">
                  <el-select class="select1" v-model="value21" placeholder="上午">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                  </el-select>
                  <el-select class="select2" v-model="value22" placeholder="1">
                  <el-option
                    v-for="item in hour1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                  </el-select>
                  <el-select class="select2" v-model="value23" placeholder="1">
                  <el-option
                    v-for="item in minute1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                  </el-select>
                </div>
              </div>
            </div>
            <el-button class="bottom_btn" type="primary">确认</el-button>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"
export default {
  name: "AdminRegis",
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "上午"
        },
        {
          value: "选项2",
          label: "下午"
        }
      ],
      hour1: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        },
        {
          value: "选项4",
          label: "4"
        },
        {
          value: "选项5",
          label: "5"
        },
        {
          value: "选项6",
          label: "6"
        },
        {
          value: "选项7",
          label: "7"
        },
        {
          value: "选项8",
          label: "8"
        },
        {
          value: "选项9",
          label: "9"
        },
        {
          value: "选项10",
          label: "10"
        },
        {
          value: "选项11",
          label: "11"
        },
        {
          value: "选项12",
          label: "12"
        }
      ],
      minute1: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        },
        {
          value: "选项4",
          label: "4"
        },
        {
          value: "选项5",
          label: "5"
        },
        {
          value: "选项6",
          label: "6"
        },
        {
          value: "选项7",
          label: "7"
        },
        {
          value: "选项8",
          label: "8"
        },
        {
          value: "选项9",
          label: "9"
        },
        {
          value: "选项10",
          label: "10"
        },
        {
          value: "选项11",
          label: "11"
        },
        {
          value: "选项12",
          label: "12"
        },
        {
          value: "选项13",
          label: "13"
        },
        {
          value: "选项14",
          label: "14"
        },
        {
          value: "选项15",
          label: "15"
        },
        {
          value: "选项16",
          label: "16"
        },
        {
          value: "选项17",
          label: "17"
        },
        {
          value: "选项18",
          label: "18"
        },
        {
          value: "选项19",
          label: "19"
        },
        {
          value: "选项20",
          label: "20"
        },
        {
          value: "选项21",
          label: "21"
        },
        {
          value: "选项22",
          label: "22"
        },
        {
          value: "选项23",
          label: "23"
        },
        {
          value: "选项24",
          label: "24"
        },
        {
          value: "选项25",
          label: "25"
        },
        {
          value: "选项26",
          label: "26"
        },
        {
          value: "选项27",
          label: "27"
        },
        {
          value: "选项28",
          label: "28"
        },
        {
          value: "选项29",
          label: "29"
        },
        {
          value: "选项30",
          label: "30"
        },
        {
          value: "选项31",
          label: "31"
        },
        {
          value: "选项32",
          label: "32"
        },
        {
          value: "选项33",
          label: "33"
        },
        {
          value: "选项34",
          label: "34"
        },
        {
          value: "选项35",
          label: "35"
        },
        {
          value: "选项36",
          label: "36"
        },
        {
          value: "选项37",
          label: "37"
        },
        {
          value: "选项38",
          label: "38"
        },
        {
          value: "选项39",
          label: "39"
        },
        {
          value: "选项40",
          label: "40"
        },
        {
          value: "选项41",
          label: "41"
        },
        {
          value: "选项42",
          label: "42"
        },
        {
          value: "选项43",
          label: "43"
        },
        {
          value: "选项44",
          label: "44"
        },
        {
          value: "选项45",
          label: "45"
        },
        {
          value: "选项46",
          label: "46"
        },
        {
          value: "选项47",
          label: "47"
        },
        {
          value: "选项48",
          label: "48"
        },
        {
          value: "选项49",
          label: "49"
        },
        {
          value: "选项50",
          label: "50"
        },
        {
          value: "选项51",
          label: "51"
        },
        {
          value: "选项52",
          label: "52"
        },
        {
          value: "选项53",
          label: "53"
        },
        {
          value: "选项54",
          label: "54"
        },
        {
          value: "选项55",
          label: "55"
        },
        {
          value: "选项56",
          label: "56"
        },
        {
          value: "选项57",
          label: "57"
        },
        {
          value: "选项58",
          label: "58"
        },
        {
          value: "选项59",
          label: "59"
        }
      ],
      value11: "",
      value12: [],
      value13: [],
      value21: [],
      value22: [],
      value23: [],
      money: "100000",
      number: 99,
      number1: 100,
      number2: 101,
      number3: 102,
      number4: 103
    };
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
    Login: function() {

    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}

.container {
  padding-top: 70px;
  padding-left: 220px;
  text-align: left;
}
.box-card {
  line-height: 24px;
  padding: 10px 20px;
  margin: 15px 0;
  border-radius: 2px;
  font-size: 14px;
  background: #fff;
}

.checkin1 {
  font-size: 16px;
  width: 1200px;
}
.bottom_content {
  width: 100%;
  margin: 2px 0 0px;
  padding: 1px 0px 1px;
  background-color: #fff;
}

.bottom_content1 {
  width: 900px;
  height: 30px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
.bottom_content2 {
  width: 250px;
  display: flex;
  justify-content: space-between;
}
.bottom_content3 {
  display: flex;
  margin: 20px 10px 150px;
  justify-content: space-around;
}
.bottom_content4 {
  display: inline-block;
}
.bottom_content4_title {
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  margin: 10px;
}
font {
  font-weight: 200px;
}
.bottom_btn {
  display: block;
  margin: 20px auto;
}
.select1 {
  width: 80px;
  margin: 5px;
}
.select2 {
  width: 70px;
  margin: 5px;
}
</style>
