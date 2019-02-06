<template>
  <div class="main">
    <header class="head">个人信息</header>
    <div class="info-table">
      <div class="form-div">
        <img class="icon" src="../assets/user.png">
        <div class="input-div">
          <span class="info" v-show="noedit">{{username}}</span>
        </div>
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/phone.png">
        <div class="input-div">
          <span class="info" v-show="noedit">{{cellphone}}</span>
        </div>
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/QQ.png">
        <div class="input-div">
          <span class="info info-null" v-show="noeditQQ">QQ</span>
          <span class="info" v-show="noedit">{{qqnumber}}</span>
        </div>
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/wx.png">
        <div class="input-div">
          <span class="info info-null" v-show="noeditwx">微信</span>
          <span class="info" v-show="noedit">{{wechat}}</span>
        </div>
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/occupation.png">
        <div class="input-div spacial">
          职业：<span class="info" v-show="noedit">{{occupation}}</span>
        </div>
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/location.png">
        <span class="necessary" v-show="edit">*</span>
        <div class="input-div spacial">
          原籍：<span class="info" v-show="noedit">{{town}}</span>
          <span class="info" v-show="noedit" style="margin-left: 0.6rem;">{{village}}村</span>
        </div>
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/team.png">
        <div class="input-div">
          <span class="info info-null" v-show="noeditteam">工作单位</span>
          <span class="info" v-show="noedit">{{team}}</span>
        </div>
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/address.png">
        <div class="input-div">
          <span class="info info-null" v-show="noeditaddress">地址</span>
          <span class="info" v-show="noedit">{{address}}</span>
        </div>
      </div>
    </div>
    <Navigation v-show="noedit" :tagid="4"></Navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Userinfo',
  data () {
    return {

    }
  },
  components: {
    Navigation
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  font-size: 0.52rem;
  /* background-color: #f4f4f4; */
  background-color: #fff;
}

.head {
  width: 100%;
  padding: 0.28rem 0;
  border-bottom: 1px solid #ebebeb;
  color: #f39839;
  background-color: #fff;
}
</style>
