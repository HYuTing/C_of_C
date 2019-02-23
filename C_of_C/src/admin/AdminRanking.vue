<template>
  <div class="main">
    <div class="header">
      <p class="return" @click="reback()">&lt; 返回</p>
      <p class="title">莆田忠门籍在榕乡亲捐款排行榜</p>
    </div>
    <div class="result-div">
      <div class="ranking-list">
        <p class="town-name">山亭镇</p>
        <div class="topthree">
          <div class="fst">
            <img src="../assets/fst2.png" class="fst-icon">
            <p class="fst-name">{{st[1].userInfoName}}</p>
            <p>{{st[1].donationNumber}}</p>
          </div>
          <div class="fst">
            <img src="../assets/fst1.png" class="fst-icon">
            <p class="first-name">{{st[0].userInfoName}}</p>
            <p>{{st[0].donationNumber}}</p>
          </div>
          <div class="fst">
            <img src="../assets/fst3.png" class="fst-icon">
            <p class="fst-name">{{st[2].userInfoName}}</p>
            <p>{{st[2].donationNumber}}</p>
          </div>
        </div>
        <div class="others">
          <p class="list" v-for="(item, index) in DataTable1" v-bind:key="index">
            {{pageSize*n1 + index + 1}}
            <span class="name">{{item.userInfoName}}</span>
            <span class="num">{{item.donationNumber}} 元</span>
          </p>
        </div>
      </div>
      <div class="ranking-list">
        <p class="town-name">忠门镇</p>

      </div>
      <div class="ranking-list">
        <p class="town-name">东埔镇</p>

      </div>
      <div class="ranking-list">
        <p class="town-name">月塘镇</p>

      </div>
    </div>
  </div>
</template>

<script>
// var thisVue = document;
export default {
  name: "AdminRanking",
  data() {
    return {
      value: 42,
      pageSize: 10,
      st: [{userInfoName: '暂无', donationNumber: 0}, {userInfoName: '暂无', donationNumber: 0}, {userInfoName: '暂无', donationNumber: 0}],
      DataTable1: [],
      n1: 0,
      total1: 0,
      zm: [
        {
          userInfoName: '黄',
          donationNumber: 0
        },
        {
          userInfoName: '乐',
          donationNumber: 0
        },{
          userInfoName: '兴',
          donationNumber: 0
        }
      ],
      DataTable2: [],
      dp: [
        {
          userInfoName: '黄',
          donationNumber: 0
        },
        {
          userInfoName: '乐',
          donationNumber: 0
        },{
          userInfoName: '兴',
          donationNumber: 0
        }
      ],
      DataTable3: [],
      yt: [
        {
          userInfoName: '黄',
          donationNumber: 0
        },
        {
          userInfoName: '乐',
          donationNumber: 0
        },{
          userInfoName: '兴',
          donationNumber: 0
        }
      ],
      DataTable4: [],
    };
  },
  created() {
    this.axios({
      url: this.baseUrl + '/donation/rank?minNumber=' + 1,
      method: 'get'
    })
    .then((res) => {
      console.log(res);
      for(var i=0; i<3; i++) {
        if(res.data.data.donationRankMap["东埔"][i]) {
          console.log(res.data.data.donationRankMap["东埔"][i]);
          this.$set(this.st, i, res.data.data.donationRankMap["东埔"][i]);
        }
      }
      var dp_len = res.data.data.donationRankMap["东埔"].length
      this.total1 = parseInt(dp_len/this.pageSize);
      for(var i=3; i<dp_len; i++) {
        this.DataTable1[i-3] = res.data.data.donationRankMap["东埔"][i];
      }
      console.log(this.DataTable1);
    })
    .catch((error) => {
      console.log(error);
    })
  },
  methods: {
    reback: function(){
      this.$router.push("/admin/payment_management");
    },
    a() {
      this.value ++
      console.log(this.value)
      setTimeout(this.a,1000)
    },
    getInfo() {

    }
  },
  mounted() {
      setTimeout(this.getInfo,100);
      // this.getInfo;
  }
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  min-width: 1360px;
  height: 100%;
  font-size: 16px;
  color: #ffeecc;
  background-color: #b81d25;
}

.header {
  padding-top: 40px;
}

.return {
  position: absolute;
  top: 44px;
  left: 64px;
  z-index: 99;
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 32px;
  letter-spacing: 2px;
}

.result-div {
  display: flex;
  height: 87%;
  padding: 0 20px;
  background-color: #b81d25;
}

.ranking-list {
  position: relative;
  flex: 1;
  margin: 30px 8px;
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  text-align: center;
  background: #b81d25;
}

.town-name {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 12px auto;
}

.topthree {
  display: flex;
  margin-bottom: 20px;
}

.fst {
  flex: 1;
  height: 100%;
  margin: 0 10px;
  font-weight: bold;
}

.fst-icon {
  width: 50px;
}

.fst-name {
  line-height: 26px;
  margin-top: 7px;
  margin-bottom: 10px;
  font-size: 20px;
  letter-spacing: 1px;
}

.first-name {
  line-height: 26px;
  margin-top: 2px;
  margin-bottom: 10px;
  font-size: 20px;
}

.others {
  position:absolute;
  top: 180px;
  bottom: 10px;
  left: 0;
  right: 0;
}

.list {
  height: 7.1%;
  text-align: left;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

.name {
  margin: 0 20px;
  margin-right: 30px;
}
</style>
