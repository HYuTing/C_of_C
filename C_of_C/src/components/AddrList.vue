<template>
  <div class="main">
    <header class="head">
      <img class="renovate" src="../assets/renovate.png" @click="renovate">
      通讯录
    </header>
    <div class="search">
      <div class="search-div search-condition">
        <select class="condition" v-model="searchCondition" @change="getSelected">
          <option :value="coupon.id" v-for="coupon in couponList" v-bind:key="coupon.id">{{coupon.name}}</option>
        </select>
      </div>
      <div class="search-div search-input">
        <div class="input-div">
          <input type="text" placeholder="请输入关键字" class="s-input" v-model="searchValue">
        </div>
      </div>
      <div class="search-div search-btn">
        <div class="btn-div">
          <button class="s-btn" @click="searchInfo">搜 索</button>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      加载中...
    </div>
    <div class="loading" v-if="fail">
      未找到相关信息
    </div>
    <div v-if="success">
      <div class="addrlist">
        <ul class="addrlist-ul">
          <li class="table-head">
            <span class="num1">姓名</span>
            <span class="num2">镇</span>
            <span class="num3">村</span>
            <span class="num4">手机号</span>
          </li>
          <li v-for="(item, index) in currentAddrlist" v-bind:key="index">
            <span class="num1">{{item.userInfoName}}</span>
            <span class="num2">{{item.userInfoTown}}</span>
            <span class="num3">{{item.userInfoVillage}}</span>
            <span class="num4">{{item.userInfoPhone}}</span>
          </li>
        </ul>
        <div class="page">
          <div class="pagepart pageleft">
            <img class="prev page-icon" src="../assets/square.png" @click="prev">
            <span>{{curPageNum}}</span>/<span>{{maxPageNum}}</span>
            <img class="next page-icon" src="../assets/square.png" @click="next">
          </div>
          <div class="pagepart pageright">
            <div class="pagenum-div">
              <input type="number" class="pagenum" v-model="gotoPageNum">
            </div>
            <button class="gotobtn" @click="gotoPage">跳 转</button>
          </div>
        </div>
      </div>
    </div>
    <Navigation :tagid="1"></Navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'AddrList',
  data () {
    return {
      searchConditon: '',
      keyword: '',
      maxPageNum: 1,
      curPageNum: 1,
      pageSize: 4,
      gotoPageNum: '',
      currentAddrlist: [],

      couponList:[
        {
          id: '0',
          name: '请选择条件'
        },
        {
          id: '1',
          name: '姓名条件'
        },
        {
          id: '2',
          name: '片区条件'
        },
        {
          id: '3',
          name: '村条件'
        },
        {
          id: '4',
          name: '职业条件'
        },
        {
          id: '5',
          name: '单位条件'
        }
      ],
      searchCondition: '',
      searchValue: '',

      name: '',
      town: '',
      village: '',
      occupation: '',
      team: '',

      loading: false,
      success: true,
      fail: false
    }
  },
  components: {
    Navigation
  },
  created() {
    var _this = this;

    this.searchCondition = this.couponList[0].id;
    this.axios({
      // url: this.baseUrl + '/user/info/search',
      url: '/api/user/info/search',
      method: 'post',
      headers: {
        "S-TOKEN": this.$cookies.get('token')
      },
      data: {
        "pageNum": 1,
        "pageSize": this.pageSize,
        "userInfoName": "",
        "userInfoOccupation": "",
        "userInfoTown": "",
        "userInfoUnit": "",
        "userInfoVillage": ""
      }
    })
    .then(function(res) {
      console.log(res);
      _this.maxPageNum = res.data.data.maxPageNum;
      _this.curPageNum = 1;
      _this.currentAddrlist = res.data.data.userInfoVOList;
    })
    .catch(function(error) {
      console.log(error);
      _this.$toast('信息读取失败');
    })
  },
  watch: {
    searchCondition(val) {
      this.searchValue = '';
      this.name = '';
      this.town = '';
      this.village = '';
      this.occupation = '';
      this.team = '';
    }
  },
  methods: {
    prev: function() {
      var _this = this;
      if(this.curPageNum === 1) {
        this.$toast('没有上一页了');
      }
      else {
        this.curPageNum = this.curPageNum-1;
        this.currentAddrlist = [];
        this.loading = true;
        this.success = false;

          this.axios({
            // url: this.baseUrl + '/user/info/search',
            url: '/api/user/info/search',
            method: 'post',
            headers: {
              "S-TOKEN": this.$cookies.get('token')
            },
            data: {
              "pageNum": this.curPageNum,
              "pageSize": this.pageSize,
              "userInfoName": this.name,
              "userInfoOccupation": this.occupation,
              "userInfoTown": this.town,
              "userInfoUnit": this.team,
              "userInfoVillage": this.village
            }
          })
          .then(function(res) {
            // console.log(res);
            _this.currentAddrlist = res.data.data.userInfoVOList;
            _this.success = true;
            _this.loading = false;
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast('信息读取失败');
          })
      }
    },
    next: function() {
      var _this = this;
      if(this.curPageNum === this.maxPageNum) {
        this.$toast('没有下一页了');
      }
      else {
        this.curPageNum = this.curPageNum+1;
        this.currentAddrlist = [];
        this.loading = true;
        this.success = false;

          this.axios({
            // url: this.baseUrl + '/user/info/search',
            url: '/api/user/info/search',
            method: 'post',
            headers: {
              "S-TOKEN": this.$cookies.get('token')
            },
            data: {
              "pageNum": this.curPageNum,
              "pageSize": this.pageSize,
              "userInfoName": this.name,
              "userInfoOccupation": this.occupation,
              "userInfoTown": this.town,
              "userInfoUnit": this.team,
              "userInfoVillage": this.village
            }
          })
          .then(function(res) {
            // console.log(res);
            _this.currentAddrlist = res.data.data.userInfoVOList;
            _this.loading = false;
            _this.success = true;
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast('信息读取失败');
          })
      }
    },
    gotoPage: function() {
      console.log(this.gotoPageNum);
      var _this = this;
      if(0 < this.gotoPageNum && this.gotoPageNum <= this.maxPageNum) {
        this.loading = true;
        this.success = false;

          this.axios({
            // url: this.baseUrl + '/user/info/search',
            url: '/api/user/info/search',
            method: 'post',
            headers: {
              "S-TOKEN": this.$cookies.get('token')
            },
            data: {
              "pageNum": this.gotoPageNum,
              "pageSize": this.pageSize,
              "userInfoName": this.name,
              "userInfoOccupation": this.occupation,
              "userInfoTown": this.town,
              "userInfoUnit": this.team,
              "userInfoVillage": this.village
            }
          })
          .then(function(res) {
            // console.log(res);
            _this.curPageNum = _this.gotoPageNum
            _this.currentAddrlist = res.data.data.userInfoVOList;
            _this.gotoPageNum = '';
            _this.loading = false;
            _this.success = true;
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast('信息读取失败');
          })
      }
      else {
        this.$toast('页码错误');
      }
    },
    getSelected: function() {
      // console.log(this.searchCondition)
    },
    searchInfo: function() {
      var _this = this;

      if(this.searchCondition == 1) {
        this.name = this.searchValue;
      }
      else if(this.searchCondition == 2) {
        this.town = this.searchValue;
      }
      else if(this.searchCondition == 3) {
        this.village = this.searchValue;
      }
      else if(this.searchCondition == 4) {
        this.occupation = this.searchValue;
      }
      else if(this.searchCondition == 5) {
        this.team = this.searchValue;
      }
      // console.log('name:' + this.name);
      // console.log('town:' + this.town);
      // console.log('village:' + this.village);
      // console.log('occupation:' + this.occupation);
      // console.log('team:' + this.team);

      this.curPageNum = 1;
      this.loading = true;
      this.success = false;
      this.fail = false;
      this.axios({
        // url: this.baseUrl + '/user/info/search',
        url: '/api/user/info/search',
        method: 'post',
        headers: {
          "S-TOKEN": this.$cookies.get('token')
        },
        data: {
          "pageNum": this.curPageNum,
          "pageSize": this.pageSize,
          "userInfoName": this.name,
          "userInfoOccupation": this.occupation,
          "userInfoTown": this.town,
          "userInfoUnit": this.team,
          "userInfoVillage": this.village
        }
      })
      .then(function(res) {
        // console.log(res);
        _this.gotoPageNum = '';
        _this.loading = false;

        if(res.data.data.maxPageNum == 0) {
          _this.fail = true;
        }
        else {
          _this.success = true;
          _this.maxPageNum = res.data.data.maxPageNum;
          _this.currentAddrlist = res.data.data.userInfoVOList;
        }
      })
      .catch(function(error) {
        console.log(error);
        _this.$toast('信息读取失败');
      })

    },
    renovate: function() {
      var _this = this;

      this.searchValue = '';
      this.name = '';
      this.town = '';
      this.village = '';
      this.occupation = '';
      this.team = '';
      this.loading = true;
      this.success = false;
      this.fail = false;

      this.axios({
        // url: this.baseUrl + '/user/info/search',
        url: '/api/user/info/search',
        method: 'post',
        headers: {
          "S-TOKEN": this.$cookies.get('token')
        },
        data: {
          "pageNum": 1,
          "pageSize": this.pageSize,
          "userInfoName": "",
          "userInfoOccupation": "",
          "userInfoTown": "",
          "userInfoUnit": "",
          "userInfoVillage": ""
        }
      })
      .then(function(res) {
        console.log(res);
        _this.maxPageNum = res.data.data.maxPageNum;
        _this.curPageNum = 1;
        _this.currentAddrlist = res.data.data.userInfoVOList;
        _this.loading = false;
        _this.success = true;
      })
      .catch(function(error) {
        console.log(error);
        _this.$toast('信息读取失败');
      })
    }
  }
}

function getInfo() {

}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  font-size: 0.52rem;
  background: #fff;
}

.head {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.28rem 0;
  color: #f39839;
  background-color: #fff;
  z-index: 99;
}

.renovate {
  position: fixed;
  top: 0.4rem;
  right: 0.4rem;
  width: 0.52rem;
}

.search {
  position: fixed;
  top: 1.26rem;
  box-sizing: border-box;
  width: 100%;
  height: 1.42rem;
  padding: 0.24rem 0.1rem;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;
  z-index: 99;
}

.search-div {
  box-sizing: border-box;
  float: left;
  height: 0.88rem;
}

.search-condition {
  width: 30%;
  padding-right: 0.12rem;
  background: transparent;
}

.condition {
  width: 97%;
  height: 0.88rem;
  padding-left: 0.06rem;
  font-size: 0.46rem;
  color: #606266;
  border: none;
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
  background: url("../assets/arrow.png") no-repeat scroll right center transparent;
}

.search-input {
  width: 50%;
  padding: 0 0.12rem;
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
}

.input-div {
  width: 100%;
  line-height: 0.88rem;
  border-radius: 0.1rem;
  background: #f4f4f4;
}

.s-input {
  width: 92.8%;
  line-height: 0.86rem;
  padding: 0 0.14rem;
  border: none;
  font-size: 0.46rem;
  border-radius: 0.1rem;
  background-color: transparent;
}

::-webkit-input-placeholder { /* WebKit browsers */
  color: #909399;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: #909399;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #909399;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #909399;
}

.search-btn {
  width: 20%;
  padding-left: 0.124rem;
  padding-right: 0.06rem;
}

.btn-div {
  width: 100%;
  border-radius: 0.1rem;
  background: #b74620;
}

.s-btn {
  width: 100%;
  height: 0.88rem;
  border: none;
  font-size: 0.4rem;
  color: #fff;
  background: transparent;
}

.addrlist {
  padding: 2.9rem 0.22rem;
  padding-right: 0.25rem;
  padding-bottom: 2.68rem;
  font-size: 0.46rem;
  color: #303133;
}

.table-head {
  font-weight: 600;
}

.addrlist-ul {
  width: 100%;
  float: left;
  margin-bottom: 0.44rem;
  text-align: center;
  border: 1px solid #909399;
  border-bottom: none;
}

.addrlist-ul>li {
  float: left;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #909399;
}

.addrlist-ul>li span {
  display: inline-block;
  box-sizing: border-box;
  float: left;
  padding: 0.16rem 0;
}

.num1 {
  width: 22%;
  border-right: 1px solid #909399;
}
.num2 {
  width: 18%;
  border-right: 1px solid #909399;
}
.num3 {
  width: 25%;
  border-right: 1px solid #909399;
}
.num4 {
  width: 35%;
}

.page {
  clear: both;
  margin-top: 1rem;
  font-size: 0.52rem;
  background: #b746205e;
}

.pagepart {
  box-sizing: border-box;
  float: left;
  width: 50%;
}

.pageleft {
  padding-right: 0.3rem;
  text-align: right;
}

.pageright {
  text-align: left;
}

.page-icon {
  width: 0.45rem;
  margin-bottom: -0.05rem;

}
.prev {
  transform:rotate(-90deg);
  -ms-transform:rotate(-90deg); 	/* IE 9 */
  -moz-transform:rotate(-90deg); 	/* Firefox */
  -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
  -o-transform:rotate(-90deg); 	/* Opera */
}
.next {
  transform:rotate(90deg);
  -ms-transform:rotate(90deg); 	/* IE 9 */
  -moz-transform:rotate(90deg); 	/* Firefox */
  -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
  -o-transform:rotate(90deg); 	/* Opera */
}

.pagenum-div {
  float: left;
  width: 1.08rem;
  height: 0.63rem;
  margin-top: -0.04rem;
  margin-right: 0.3rem;
  border: 1px solid #909399;
  border-radius: 0.08rem;
  background: transparent;
}

.pagenum {
  width: 1rem;
  padding: 0.02rem 0.04rem;
  font-size: 0.46rem;
  border: none;
  background-color: transparent;
}

.gotobtn {
  float: left;
  width: 1.36rem;
  height: 0.65rem;
  margin-top: -0.04rem;
  border: none;
  border-radius: 0.08rem;
  color: #fff;
  background-color: #b74620;
}

.loading {
  position: relative;
  top: 3.6rem;
  font-size: 0.46rem;
  color: #909399;
}
</style>
