<template>
  <div class="main">
    <header class="head">个人信息</header>
    <div class="info-table">
      <form class="info-form">
        <div class="form-div">
          <img class="icon" src="../assets/user.png">
          <span class="necessary">*</span>
          <div class="input-div">
            <span class="info" v-show="noedit">{{username}}</span>
            <input v-model="username" v-show="edit" class="info-input usrname-input" placeholder="姓名">
          </div>
        </div>
        <div class="form-div">
          <img class="icon" src="../assets/phone.png">
          <span class="necessary">*</span>
          <div class="input-div">
            <span class="info" v-show="noedit">{{cellphone}}</span>
            <input v-model="cellphone" v-show="edit" class="info-input" type="tel" maxlength="11" placeholder="手机号">
          </div>
        </div>
        <div class="form-div">
          <img class="icon" src="../assets/QQ.png">
          <span class="unnecessary">*</span>
          <div class="input-div">
            <span class="info" v-show="noedit">{{qqnumber}}</span>
            <input v-model="qqnumber" v-show="edit" class="info-input" placeholder="QQ">
          </div>
        </div>
        <div class="form-div">
          <img class="icon" src="../assets/wx.png">
          <span class="unnecessary">*</span>
          <div class="input-div">
            <span class="info" v-show="noedit">{{wechat}}</span>
            <input v-model="wechat" v-show="edit" class="info-input" placeholder="微信">
          </div>
        </div>
        <div class="form-div">
          <img class="icon" src="../assets/occupation.png">
          <span class="necessary">*</span>
          <div class="input-div spacial">
            职业：<span class="info" v-show="noedit">{{occupation}}</span>
            <select class="select occupation" v-model="occupationid" v-show="edit">
              <option value="occupation1">公务员</option>
              <option value="occupation2">事业单位</option>
              <option value="occupation3">企业与自由职业</option>
              <option value="occupation4">无业或退休</option>
            </select>
          </div>
        </div>
        <div class="form-div">
          <img class="icon" src="../assets/location.png">
          <span class="necessary">*</span>
          <div class="input-div spacial">
            原籍：<span class="info" v-show="noedit">{{town}}</span>
            <select class="select town" v-model="townid" v-show="edit">
              <option value="st">山亭镇</option>
              <option value="zm">忠门镇</option>
              <option value="dp">东埔镇</option>
              <option value="yt">月塘镇</option>
            </select>
            <span class="info" v-show="noedit" style="margin-left: 0.4rem;">{{village}}村</span>
            <select class="select village" v-model="village" v-show="edit">
              <option v-for="(item, index) in items" v-bind:key="index">{{item}}</option>
            </select>
          </div>
        </div>
        <div class="form-div">
          <img class="icon" src="../assets/team.png">
          <span class="unnecessary">*</span>
          <div class="input-div">
            <span class="info" v-show="noedit">{{team}}</span>
            <input v-model="team" v-show="edit" class="info-input" placeholder="工作单位">
          </div>
        </div>
        <div class="form-div">
          <img class="icon" src="../assets/address.png">
          <span class="unnecessary">*</span>
          <div class="input-div">
            <span class="info" v-show="noedit">{{address}}</span>
            <input v-model="address" v-show="edit" class="info-input" placeholder="地址">
          </div>
        </div>
      </form>
      <button v-show="edit" class="save-btn" @click="save">保 存</button>
      <button v-show="noedit" class="save-btn" @click="editinfo">修 改</button>
      <p v-show="edit" class="tip">* 为必填</p>
    </div>
    <!-- <button @click="text">测试</button> -->
  </div>
</template>

<script>
export default {
  name: 'Userinfo',
  data () {
    return {
      noedit: false,
      edit: true,
      username: '',
      cellphone: '',
      qqnumber: '',
      wechat: '',
      occupationid: '',
      occupation: '',
      townid: '',
      town: '',
      village: '',
      team: '',
      address: '',
      items: [],
      item0: ['西乌垞','东乌垞','新乌垞','山柄','东店','西埔','西埔口','山亭','蒋山','利山','港里','西前','莆禧','东仙','文甲'],
      item1: ['后坑','安柄','柳厝','沁头','秀华','秀田','秀前','琼山','忠门','王厝'],
      item2: ['何山','东坑','前范','度口','东埔','下坑','塔林','乐屿','西山','度下','梯亭','吉成','东吴'],
      item3: ['联星','坂尾','霞塘','西元','月埔','双告山','霞塘','西元','月埔','双告山','前康','岱(蚮)前','东潘','洋埭']
    }
  },
  created() {
    var param = this.$route.query.edit;
    var _this = this;
    if(param == 0) {
      this.noedit = true
      this.edit = false;
      this.axios({
        // url: this.baseUrl + '/user/info',
        url: '/api/user/info',
        method: 'get',
        headers: {
          "S-TOKEN": this.$cookies.get('token')
        }
      })
      .then(function(res) {
        console.log(res);
        _this.username = res.data.data.userInfoName;
        _this.cellphone = res.data.data.userInfoPhone;
        _this.qqnumber = res.data.data.userInfoQQ;
        _this.wechat = res.data.data.userInfoWechat;
        _this.occupation = res.data.data.userInfoOccupation;
        _this.town = res.data.data.userInfoTown;
        _this.village = res.data.data.userInfoVillage;
        _this.team = res.data.data.userInfoUnit;
        _this.address = res.data.data.userInfoAddress;
      })
      .catch(function(error) {
        console.log(error);
        _this.$toast('信息读取失败');
      })
    }
  },
  watch: {
    cellphone(val) {
      var re = /^1[0-9]*$/;
      // console.log(re.test(val));
      if(re.test(val)) {
        // this.$toast('手机号');
      }
      else {
        this.$toast('手机号错误');
      }
    },
    occupationid(val) {
      if(val == 'occupation1') {
        this.occupation = '公务员'
      }
      else if(val == 'occupation2') {
        this.occupation = '事业单位'
      }
      else if(val == 'occupation3') {
        this.occupation = '企业与自由职业'
      }
      else if(val == 'occupation4') {
        this.occupation = '无业或退休'
      }
    },
    townid(val) {
      //console.log(val);
      if(val == 'st') {
        this.town = '山亭镇';
        this.village = '';
        this.items = this.item0;
      }
      else if(val == 'zm') {
        this.town = '忠门镇';
        this.village = '';
        this.items = this.item1;
      }
      else if(val == 'dp') {
        this.town = '东埔镇';
        this.village = '';
        this.items = this.item2;
      }
      else if(val == 'yt') {
        this.town = '月塘镇';
        this.village = '';
        this.items = this.item3;
      }
    }
  },

  methods: {
    // text: function() {
    //   this.$getToken();
    // }
    save: function() {
      var _this = this;
      this.$getToken();

      if(this.$getToken()) {
        if(this.username == '') {
          this.$toast('姓名不能为空');
        }
        else if(this.cellphone == '') {
          this.$toast('手机号不能为空');
        }
        else if(this.cellphone.length < 11) {
          this.$toast('手机号错误');
        }
        else if(this.occupation == '') {
          this.$toast(' 职业不能为空');
        }
        else if(this.town == '') {
          this.$toast(' 镇不能为空');
        }
        else {
          // console.log(this.village);
          if(this.village == '' || !(this.village)) {
            this.$toast(' 村不能为空');
          }
          else {
            this.axios({
              // url: this.baseUrl + '/user/info',
              url: '/api/user/info',
              method: 'post',
              data: {
                "userInfoAddress": this.address,
                "userInfoName": this.username,
                "userInfoOccupation": this.occupation,
                "userInfoPhone": this.cellphone,
                "userInfoQQ": this.qqnumber,
                "userInfoTown": this.town,
                "userInfoUnit": this.team,
                "userInfoVillage": this.village,
                "userInfoWechat": this.wechat
              },
              headers: {
                "S-TOKEN": this.$cookies.get('token')
              }
            })
            .then(function(res) {
              // console.log(res);
              _this.noedit = !_this.noedit;
              _this.edit = !_this.edit;
            })
            .catch(function(error) {
              // console.log(error);
              _this.$toast('保存失败');
            })
          }
        }
      }
    },
    editinfo: function() {
      this.noedit = !this.noedit;
      this.edit = !this.edit;
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #F2F6FC;
}

.head {
  width: 100%;
  padding: 0.25rem 0;
  margin-bottom: 0.25rem;
  font-size: 0.46rem;
  color: #fff;
  background-color: #f38255;
}

.info-table {
  padding: 0.6rem 0.56rem;
  padding-bottom: 0.56rem;
  background-color: #fff;
}

.info-form {
  text-align: left;
}

.form-div {
  position: relative;
  margin-bottom: 0.9rem;
  font-size: 0.6rem;
}

.icon {
  width: 0.88rem;
  margin-bottom: -0.4rem;
}

.necessary {
  margin-right: 0.1rem;
  font-size: 0.6rem;
  font-weight: bolder;
  color: #F56C6C;
}

.unnecessary {
  margin-right: 0.1rem;
  font-size: 0.6rem;
  font-weight: bolder;
  color: transparent;
}

.input-div {
  position: absolute;
  top: 0;
  left: 1.4rem;
  width: 83%;
  height: 0.98rem;
  line-height: 0.98rem;
  color: #303133;
  border-bottom: 0.01rem solid #C0C4CC;
}

.spacial {
  width: 81%;
  padding: 0.12rem 0.14rem;
  padding-top: 0;
}

.info-input {
  width: 96%;
  padding: 0.14rem;
  border: none;
  font-size: 0.6rem;
  background-color: transparent;
}

.select {
  width: 5.2rem;
  margin-left: -0.02rem;
  font-size: 0.6rem;
  border: none;
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
  background: url("../assets/arrow.png") no-repeat scroll right center transparent;
}

.town {
  width: 2.2rem;
}

.village {
  width: 2.82rem;
}

.save-btn {
  width: 36%;
  padding: 0.2rem 0;
  margin: 0.2rem auto;
  border: none;
  border-radius: 0.1rem;
  font-size: 0.6rem;
  color: #fff;
  background-color: #f38255;
}

.info {
  display: inline-block;
  margin-left: 0.14rem;
}

.usrname-input {
  position: absolute;
  top: -0.04rem;
}

.tip {
  font-size: 0.46rem;
  color: #F56C6C;
}
</style>
