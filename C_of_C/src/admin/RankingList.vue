<template>
  <div class="ranking-list">
    <p class="town-name">{{townname}}镇</p>
    <div class="topthree">
      <div class="fst">
        <img src="../assets/fst2.png" class="fst-icon">
        <p class="fst-name">{{fst[1].userInfoName}}</p>
        <p>{{fst[1].donationNumber}}</p>
      </div>
      <div class="fst">
        <img src="../assets/fst1.png" class="fst-icon">
        <p class="first-name">{{fst[0].userInfoName}}</p>
        <p>{{fst[0].donationNumber}}</p>
      </div>
      <div class="fst">
        <img src="../assets/fst3.png" class="fst-icon">
        <p class="fst-name">{{fst[2].userInfoName}}</p>
        <p>{{fst[2].donationNumber}}</p>
      </div>
    </div>
    <div class="others">
      <p class="list" v-for="(item, index) in showData" v-bind:key="index">
        {{pageSize*n + index + 4}}
        <span class="name">{{item.userInfoName}}</span>
        <span class="num">{{item.donationNumber}} 元</span>
      </p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "AdminRanking",
  data() {
    return {
      pageSize: 2,
      timer: '',
      fst: [{userInfoName: '暂无', donationNumber: 0}, {userInfoName: '暂无', donationNumber: 0}, {userInfoName: '暂无', donationNumber: 0}],
      showData: [],
      DataTable: [],
      n: 0,
      total: 0
    };
  },
  props: {
    townname: String,
    minNum: String
  },
  created() {
    this.axios({
      url: this.baseUrl + '/donation/rank?minNumber=' + this.minNum,
      method: 'get'
    })
    .then((res) => {
      // console.log(res);

      initail(this, res.data.data, this.townname);

      initailData(this, this.townname);
    })
    .catch((error) => {
      console.log(error);
    })
  },
  methods: {
    getInfo() {
      var _this = this;
      this.n ++;
      if(this.n > this.total) {
        this.n = 0;
        $.ajax({
          url: this.baseUrl + '/donation/rank?minNumber=' + this.minNum,
          method: 'get',
          headers: {
            'S-TOKEN': this.$cookies.get('token2')
          },
          async: false,
          dataType: "json",
          success: function(res) {
            // console.log(res);
            initail(_this, res.data, _this.townname);
          },
          error: function(err) {
            console.log(err);
          }
        })
      }
      var len;
      if(this.n === this.total) {
        len = this.DataTable.length%this.pageSize;
      }
      else {
        len = this.pageSize;
      }
      // console.log("第"+this.n+"次"+len);
      this.showData = [];
      for(var j=0, i=this.n*this.pageSize; i<this.n*this.pageSize+len; j++, i++) {
        this.$set(this.showData, j, this.DataTable[i]);
      }
      // console.log("第"+this.n+"次"+this.showData);
    }
  },
  mounted() {
    this.timer = setInterval(this.getInfo,5000);
  },
  beforeDestroy() { //清除定时器
    clearInterval(this.timer);
    console.log("beforeDestroy");
  },
  destroyed() { //清除定时器
    //clearInterval(this.timer);
    console.log("destroyed");
  }

};

function initail(Vm, res, name) {
  var len = res.donationRankMap[name].length;
  len<3 ? len = len : len = 3;

  var lens = res.donationRankMap[name].length;

  for(var i=0; i<len; i++) {
    if(res.donationRankMap[name][i]) {
      // console.log(res.donationRankMap[name][i]);
      Vm.$set(Vm.fst, i, res.donationRankMap[name][i]);
    }
  }
  for(var i=3; i<lens; i++) {
    Vm.$set(Vm.DataTable, i-3, res.donationRankMap[name][i]);
  }
}

function initailData(Vm, name) {
  var len=0;
  Vm.total = parseInt(Vm.DataTable.length/Vm.pageSize);
  Vm.n = 0;
  if(Vm.n === Vm.total) {
    len = Vm.DataTable.length%Vm.pageSize;
  }
  else {len = Vm.pageSize;}
  // console.log("第"+Vm.n+"次"+len);
  Vm.showData = [];
  for(var j=0, i=Vm.n*Vm.pageSize; i<Vm.n*Vm.pageSize+len; j++, i++) {
    Vm.$set(Vm.showData, j, Vm.DataTable[i]);
  }
  // console.log("第"+Vm.n+"次"+Vm.showData);
}

function count(o){
  var t = typeof o;

  if(t == 'string'){
    return o.length;
  }
  else if(t == 'object'){
    var n = 0;
    for(var i in o){
      n++;
    }
    return n;
  }
  return false;
}
</script>

<style scoped>
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
