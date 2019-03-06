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
      <div class="btn-div">
        <el-button @click="setlevel('special')" circle style="background: #b81d25; color: #ffeecc;">特</el-button>
        <el-button @click="setlevel('first')" circle style="background: #b81d25; color: #ffeecc;">一</el-button>
        <el-button @click="setlevel('second')" circle style="background: #b81d25; color: #ffeecc;">二</el-button>
        <el-button @click="setlevel('third')" circle style="background: #b81d25; color: #ffeecc;">三</el-button>
      </div>

    </div>
    <div class="result-div">
      <p class="level">{{level}}</p>
      <div v-if="flag" class="result">
        <Num v-for="(item, index) in result" v-bind:key="index" :vv="item.lotteryCode"></Num>
      </div>
    </div>
    <transition name="fade">
    <div>
      <el-button @click="reset()" :disabled="btn" class="re-btn" circle style="font-size: 28px; font-weight: normal;">{{raffleName}}</el-button>
    </div>
    </transition>
  </div>
</template>

<script>
import Num from "./num.vue"

!(function(win, doc) {
  function setFontSize() {
    var docEl = doc.documentElement;
    var winWidth = docEl.clientWidth;
    doc.documentElement.style.fontSize = (winWidth / 1080) * 100 + 'px';
  }
  var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
  var timer = null;
  win.addEventListener(evt, function() {
    clearTimeout(timer); timer = setTimeout(setFontSize, 300);
  }, false);
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) { clearTimeout(timer);
    timer = setTimeout(setFontSize, 300);
  } }, false)
  setFontSize();
}(window, document))

export default {
  name: "AdminRaffle2",
  data() {
    return {
      btn:false,
      raffleName:"抽奖",
      flag: false,
      level: '特等奖',
      result: [],
      value: 'special'
    };
  },
  components: {
    Num
  },
  created() {
    this.axios({
      url: this.baseUrl + "/lottery/prize",
      method: "get",
    })
    .then(res => {
      if(res.data.data.lotteryFirst==null){
        this.$message({
          type: "warning",
          message: "您还未设置奖品数量！"
        });
        this.$router.push({
          path: "/admin/raffle"
        });
      }
      else {
        this.$confirm('是否需要清空之前抽奖记录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios({
            url: this.baseUrl + '/lottery/clear',
            method: 'get'
          })
          .then((res) => {
            this.$message({
              type: 'success',
              message: '清空成功!'
            });
          })
          .catch((error) => {
            console.log(error);
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
          this.start();
        });
      }
    })
    .catch(error => {
      console.log(error);
    });

  },
  methods: {
    start: function() {
      var _this=this
      this.raffleName="抽奖"
      this.flag = false;
      console.log(typeof(this.value));
      this.axios({
        url: this.baseUrl + '/lottery/draw?type=' + this.value,
        method: 'get'
      })
      .then((res) => {
        console.log('获取中...');
        console.log(res.data.data.result);
        if(res.data.data.result.length !== 0) {
          this.$set(this.$data, 'result', res.data.data.result);
          this.flag = true;
        }
      })
      .catch((error) => {
        console.log(error);
      })
    },
    reset: function() {
      var _this=this;
      this.raffleName="抽奖中"
      this.btn=true;
      this.flag = false;
      console.log(typeof(this.value));
      this.axios({
        url: this.baseUrl + '/lottery/draw?type=' + this.value,
        method: 'post'
      })
      .then((res) => {
        console.log('抽奖中...');
        console.log(res.data.data.result);
        this.$set(this.$data, 'result', res.data.data.result);
        this.flag = true;
        setTimeout(function(){_this.btn=false;_this.raffleName="抽奖";},1200)
        console.log(this.flag);
      })
      .catch((error) => {
        console.log(error);
      })
    },
    reback: function() {
      this.$router.go(-1);
    },
    setlevel(val) {
      this.flag = false;
      console.log(val);
      if(val === 'special') {
        this.level = '特等奖';
        this.value = 'special';
        this.start();
      }
      else if(val === 'first') {
        this.level = '一等奖';
        this.value = 'first';
        this.flag = false;
        this.start();
      }
      else if(val === 'second') {
        this.level = '二等奖';
        this.value = 'second';
        this.start();
      }
      else if(val === 'third') {
        this.level = '三等奖';
        this.value = 'third';
        this.start();
      }

      console.log(this.flag);
    }
  }
};
</script>
<style scoped>
.el-button.is-circle {
  border-color: transparent;
  border-radius: 50%;
  padding: 12px;
  font-size: 0.16rem;
  font-weight: bold;
}
.el-button.is-circle:hover {
  border-color: hsla(40, 100%, 90%, 0.8);
  background-image: none;
  background: linear-gradient(to top, #c76828, #f1c18b);
  color: #55270d;
}
.main {
  position: relative;
  width: 100%;
  min-width: 800px;
  height: 100%;
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
  margin-top: 46px;
  font-size: 18px;
}

.select {
  position: absolute;
  top: 52px;
  right: 280px;
  width: 100px;
  opacity: 0.9;
}

.return {
  position: absolute;
  top: 60px;
  left: 64px;
  color: #fff;
  z-index: 99;
  cursor: pointer;
  font-size: 0.14rem;
}

.title {
  text-align: center;
  font-size: 0.32rem;
  letter-spacing: 2px;
  color: #ffeecc;
}

.btn-div {
  position: absolute;
  top: 60px;
  right: 250px;
}

.result-div {
  width: 76%;
  height: 75%;
  padding: 0 60px;
  margin: 40px auto;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.result-div::-webkit-scrollbar {
  display: none;
}

.level {
  display: block;
  margin: 20px auto;
  margin-bottom: 15px;
  font-size: 0.24rem;
  color: #ffeecc;
}

.result {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  font-size: 24px;
  width: 120px;
  height: 120px;
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
