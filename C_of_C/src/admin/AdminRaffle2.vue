<template>
  <div class="main">

    <img src="../assets/flower1.png" class="back-img flower1">
    <img src="../assets/flower2.png" class="back-img flower2">
    <img src="../assets/flower3.png" class="back-img flower3">
    <img src="../assets/flower3.png" class="back-img flower4">
    <img src="../assets/flower4.png" class="back-img flower5">
    <img src="../assets/flower6.png" class="back-img flower7">
    <img src="../assets/flower5.png" class="back-img flower6">

    <div class="header">
      <p class="return" @click="reback()">&lt; 返回</p>
      <p class="title">幸运大抽奖</p>
    </div>
    <div class="result-div" v-if="!show">
      <div class="result-level">
        <p class="level">特等奖</p>
        <Num v-for="(item, index) in specailaward" v-bind:key="index" :vv="item.lotteryCode"></Num>
      </div>
      <div class="result-level">
        <p class="level">一等奖</p>
        <Num v-for="(item, index) in fst" v-bind:key="index" :vv="item.lotteryCode"></Num>
      </div>
      <div class="result-level">
        <p class="level">二等奖</p>
        <Num v-for="(item, index) in snd" v-bind:key="index" :vv="item.lotteryCode"></Num>
      </div>
      <div class="result-level">
        <p class="level">三等奖</p>
        <Num v-for="(item, index) in trd" v-bind:key="index" :vv="item.lotteryCode"></Num>
      </div>
    </div>
    <transition name="fade">
    <div v-if="show">
      <el-button @click="start()" class="btn" circle>抽奖</el-button>
    </div>
    </transition>
    <transition name="fade">
    <div v-if="!show">
      <el-button @click="reset()" class="re-btn" circle>重置</el-button>
    </div>
    </transition>
  </div>
</template>

<script>
import Num from "./num.vue"

export default {
  name: "AdminRaffle2",
  data() {
    return {
      show: true,
      specailaward: [],
      fst: [],
      snd: [],
      trd: []
    };
  },
  components: {
    Num
  },
  created() {
    this.axios({
      url: this.baseUrl + '/lottery/draw',
      method: 'get'
    })
    .then((res) => {
      console.log(res);
      if(res.data.data.result.special.length === 0
        && res.data.data.result.first.length === 0
        && res.data.data.result.second.length === 0
        && res.data.data.result.third.length === 0) {
        this.show = true;
      }
      else {
        this.specailaward = res.data.data.result.special;
        this.fst = res.data.data.result.first;
        this.snd = res.data.data.result.second;
        this.trd = res.data.data.result.third;
        this.show = false;
      }
    })
    .catch((error) => {
      console.log(error);
    })
  },
  methods: {
    start: function() {
      this.show = !this.show;
      this.axios({
        url: this.baseUrl + '/lottery/draw',
        method: 'post'
      })
      .then((res) => {
        console.log('抽奖中...');
        console.log(res.data.data.result);
        this.specailaward = res.data.data.result.special;
        this.fst = res.data.data.result.first;
        this.snd = res.data.data.result.second;
        this.trd = res.data.data.result.third;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    reset: function() {
      this.$confirm('此操作将清空之前的抽奖记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.show = !this.show;
      }).catch(() => {

      });
    },
    reback: function() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.main {
  position: relative;
  width: 100%;
  min-width: 800px;
  height: 100%;
  font-size: 16px;
  background-color: #b81d25;
  overflow: hidden;
}

.back-img {
  position: absolute;
  width: 280px;
  opacity: 0.8;
}

.flower1 {
  top: 0;
  left: 0;
}
.flower2 {
  bottom: 0;
  left: 0;
  width: 440px;
}
.flower3 {
  bottom: 0;
  right: 0;
  width: 250px;
}
.flower4 {
  bottom: -60px;
  right: 180px;
  width: 250px;
  transform:rotate(50deg);
  -ms-transform:rotate(50deg); 	/* IE 9 */
  -moz-transform:rotate(50deg); 	/* Firefox */
  -webkit-transform:rotate(50deg); /* Safari 和 Chrome */
  -o-transform:rotate(50deg); 	/* Opera */
}
.flower5 {
  top: -10px;
  left: 30px;
  width: 200px;
}
.flower6 {
  top: -5px;
  right: 20px;
  width: 250px;
}
.flower7 {
  top: 230px;
  right: -30px;
  width: 160px;
}

.header {
  margin-top: 50px;
}

.return {
  position: absolute;
  top: 54px;
  left: 64px;
  color: #fff;
  z-index: 99;
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 32px;
  letter-spacing: 2px;
  color: #ffeecc;
}

.result-div {
  display: flex;
  width: 80%;
  min-height: 360px;
  max-height: 540px;
  margin: 50px auto;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.result-div::-webkit-scrollbar {
  display: none;
}

.result-level {
  flex: 1;
  color: #ffeecc;
  text-align: center;
}

.level {
  margin: 24px auto;
  font-size: 22px;
}

.btn {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 32px;
  width: 160px;
  height: 160px;
  border-color: #b81d25;
  color: #55270d;
  background: linear-gradient(to top, #c76828, #f1c18b);
  box-shadow: 6px 8px 40px rgba(0, 0, 0, 0.2);
  z-index: 99;
}

.re-btn {
  position: absolute;
  bottom: 50px;
  right: 50px;
  font-size: 20px;
  width: 100px;
  height: 100px;
  border-color: transparent;
  color: #55270d;
  background: linear-gradient(to top, #c76828, #f1c18b);
  box-shadow: 6px 8px 50px rgba(0, 0, 0, 0.3);
  z-index: 99;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
