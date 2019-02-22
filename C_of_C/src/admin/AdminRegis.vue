<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'3'"></MyNav>
    <div class="container" >
      <div class="signins">
          <p class="totalsignins"><span class="townname">忠门籍</span>签到总人数：{{number}}人</p>
          <div class="townsignins">
            <el-row>
              <el-col :span="6"><div class="grid-content">
                <span class="townname">山亭镇</span>
                <span class="townnum">{{number1}}人</span>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <span class="townname">忠门镇</span>
                <span class="townnum">{{number2}}人</span>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <span class="townname">东浦镇</span>
                <span class="townnum">{{number3}}人</span>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <span class="townname">月塘镇</span>
                <span class="townnum">{{number4}}人</span>
              </div></el-col>
            </el-row>
          </div>
      </div>
      <p class="box-card">开启签到
        <span class="demonstration">目前已有一个签到安排，时间为：{{starttime}} - {{endtime}}</span>
      </p>
      <div class="settime-div">
        <p class="tips">请选择签到时间</p>
        <div class="block">
          <el-date-picker
            v-model="registertime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
          <!-- <p class="demonstration">您选择了{{registertime[0]}} 至 {{registertime[1]}}</p> -->
        </div>
        <el-button type="primary" @click="setTime()">开启签到</el-button>
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
      number: '',
      number1: 0,
      number2: 0,
      number3: 0,
      number4: 0,
      registertime: '',
      starttime:'',
      endtime: ''
    };
  },
  components: {
    MyTop,
    MyNav
  },
  created() {
    this.axios({
      url: this.baseUrl + "/sign/count",
      method: "get",
    })
      .then(res => {
        console.log(res);
        console.log(this.number2=res.data.data.townCountMap.东埔.sum)
        this.number = res.data.data.sum;
        this.number1=res.data.data.townCountMap.山亭.sum;
        this.number2=res.data.data.townCountMap.忠门.sum;
        this.number3=res.data.data.townCountMap.东埔.sum;
        this.number4=res.data.data.townCountMap.月塘.sum;

      })
      .catch(error => {
        console.log(error);
      });
    this.axios({
      url: this.baseUrl + "/sign",
      method: "get",
    })
      .then(res => {
        this.starttime=res.data.data.signBeginTimestamp
        this.endtime=res.data.data.signEndTimestamp
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    Login: function() {

    },
    setTime: function() {
      // 请求接口 如果发现已经设置过签到时间，则弹窗提示
      if(true) {  // 记得自己写条件哦
        this.$confirm('已经设置过签到时间, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '设置成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消设置'
          });
        });
      }
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
  min-width: 440px;
  padding: 70px 20px;
  padding-left: 220px;
  padding-bottom: 20px;
  font-size: 14px;
  text-align: left;
  background-color: #f4f4f4;
}

.signins {
  padding: 15px 20px;
  border-radius: 3px;
  background-color: #fff;
}

.totalsignins {
  line-height: 16px;
  padding-left: 10px;
  border-left: 3px solid #409EFF;
  font-weight: bold;
}

.townsignins {
  margin-top: 21px;
  margin-bottom: 10px;
}

.grid-content {
  padding: 2px 0;
  text-align: center;
}

.townname {
  padding-right: 10px;
}

.box-card {
  padding: 11px 20px;
  margin: 15px 0;
  border-radius: 3px;
  font-size: 14px;
  background: #fff;
}

.demonstration {
  margin-left: 10px;
  color: #F56C6C;
}

.settime-div {
  padding: 28px 20px;
  padding-bottom: 30px;
  margin: 15px 0;
  text-align: center;
  border-radius: 3px;
  background: #fff;
}

.tips {
  margin-bottom: 15px;
  color: #909399;
}

.block {
  margin-bottom: 30px;
}
</style>
