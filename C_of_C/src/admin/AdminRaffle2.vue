<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'4-2'"></MyNav>
      <div class="container">
            <p class="box-card">
              <span>抽奖结果</span>
            </p>
            <div class="bottom_content">
              <el-table :data="tableData" stripe height="400px">
              <el-table-column align="center" prop="special" label="特等奖" ></el-table-column>
              <el-table-column align="center" prop="first" label="一等奖" ></el-table-column>
              <el-table-column align="center" prop="second" label="二等奖" ></el-table-column>
              <el-table-column align="center" prop="thrid" label="三等奖" ></el-table-column>
              </el-table>
              <transition name="fade">
              <div id="raffle" v-if="show">
                <el-button v-on:click="show = !show" class="btn" type="danger" circle>抽奖</el-button>
              </div>
              </transition>
            </div>
      </div>
  </div>
</template>

<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"

export default {
  name: "AdminRaffle2",
  data() {
    return {
      show: true,
      tableData: [
        {
          special: "李开(123456789)",
          first: "李开(123456789)",
          second: "李开(123456789)",
          thrid: "李开(123456789)"
        }
      ]
    };
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
      onDelete() {
        alert(this.url);
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
  padding: 70px 20px;
  padding-left: 220px;
  padding-bottom: 20px;
  text-align: left;
  background-color: #f4f4f4;
}
.box-card {
  padding: 13px 20px;
  margin: 0px 0 15px;
  border-radius: 3px;
  font-size: 14px;
  background: #fff;
}
.bottom_content {
  position: relative;
  width: 100%;
  margin: 2px 0 0px;
  padding: 1px 0px 1px;
  background-color: #fff;
}
#raffle {
  width: 100%;
  height: 88%;
  position: absolute;
  top: 12%;
  background-color: #fff;
}
.btn {
  display: block;
  font-size: 40px;
  text-align: center;
  margin: 80px auto;
  width: 200px;
  height: 200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
