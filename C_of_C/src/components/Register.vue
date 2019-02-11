<template>
  <div class="main">
    <div v-if="status1" class="status1">
      <div class="register-btn">
        <div class="border" @click="register">签 到</div>
      </div>
    </div>
    <div class="status2">
      <header class="head">签到</header>
      <div class="lottery">
        <div class="lottery-div">
          <p class="lottery-code">抽奖码：20191234{{lotteryCode}}</p>
          <p class="tip" v-if="befoDraw">提示：暂未开奖</p>
          <p v-if="!befoDraw">抽奖结果：一等奖{{lotteryResult}}</p>
        </div>
      </div>
      <div class="donation">
        <p>捐赠金额：</p>
        <div class="donation-div">
          <p class="donation-num"><span class="rmb">￥ </span></p>
          <input type="num" class="donation-input" value="0.00" v-model="donationNum" :disabled="!editstatus">
        </div>
        <div class="donation-btn" v-if="editstatus" @click="donation">确认捐赠</div>
        <div class="donation-btn change-num" v-if="!editstatus" @click="changeNum">修改金额</div>
      </div>
    </div>
    <Navigation :tagid="2"></Navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'AddrList',
  data () {
    return {
      status1: true,
      lotteryCode: '',
      befoDraw: true,
      lotteryResult: '',
      donationNum: '0.00',
      editstatus: true
    }
  },
  components: {
    Navigation
  },
  methods: {
    register: function() {
      var _this = this;
      this.$getToken();

      if(this.$getToken()) {
      this.axios({
        url: this.baseUrl + '/sign/check',
        // url: '/api/user/info/search',
        method: 'get',
        headers: {
          "S-TOKEN": this.$cookies.get('token')
        }
      })
      .then(function(res) {
        console.log(res);
        this.$toast('签到成功');
        setTimeout(function() {
          this.status1 = false;
        }, 1000);
      })
      .catch(function(error) {
        console.log(error);
        _this.$toast('不在签到时间范围内');
      })
      }
    },
    donation: function() {
      this.editstatus = !this.editstatus;
    },
    changeNum: function() {
      this.editstatus = !this.editstatus;
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  font-size: 0.52rem;
}

.status1 {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/df.png') no-repeat;
  background-size: 100% 94%;
  z-index: 90;
}

.register-btn {
  position: absolute;
  top: 5.36rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  background: hsla(32, 92%, 58%, 0.8);
}

.border {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  border: 0.084rem solid #fff4e7b3;
  border-radius: 50%;
  font-size: 1rem;
  color: #fff4e7e6;
  background: transparent;
}

.head {
  position: relative;
  width: 100%;
  padding: 0.28rem 0;
  border-bottom: 1px solid #f4f4f4;
  color: #f39839;
  background-color: #fff;
}

.lottery {
  padding: 0.4rem;
  border-top: 3px solid #f4f4f4;
  border-bottom: 4px solid #f4f4f4;
  font-size: 0.6rem;
  font-weight: bold;
}

.lottery-div {
  width: 5.2rem;
  margin: auto;
  text-align: left;
}

.lottery-code {
  display: inline-block;
  margin-bottom: 0.32rem;
  font-size: 0.6rem;
}

.tip {
  line-height: 0.8rem;
  font-size: 0.44rem;
  font-weight: normal;
  text-align: center;
  color: #909399;
}

.donation {
  width: 5.2rem;
  margin: 1rem auto;
  text-align: left;
  font-size: 0.6rem;
}

.donation-div {
  position: relative;
  width: 100%;
  height: 1rem;
  line-height: 1.04rem;
  margin-top: 0.4rem;
  border: 1px solid #909399;
  border-radius: 0.08rem;
  font-weight: bold;
}

.rmb {
  margin-left: 0.14rem;
}

.donation-input {
  position: absolute;
  top: 0;
  right: 0;
  width: 4.14rem;
  padding: 0.12rem 0.15rem;
  padding-top: 0.19rem;
  padding-left: 0.91rem;
  border: none;
  border-radius: 0.08rem;
  font-size: 0.6rem;
  font-weight: bold;
  background: transparent;
}

.donation-btn {
  width: 100%;
  line-height: 1rem;
  margin-top: 0.66rem;
  border: 1px solid #b74620;
  border-radius: 0.08rem;
  text-align: center;
  font-size: 0.58rem;
  color: #fff;
  background-color: #b74620;
}

.change-num {
  border: 1px solid #f39839;
  background-color: #f39839;
}
</style>
