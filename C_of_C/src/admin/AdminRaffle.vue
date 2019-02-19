<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'4-1'"></MyNav>
    <div class="container">
      <div class="prize-setting">
        <p class="box-card1">奖品设定</p>
        <el-row>
          <el-col :span="5"><div class="grid-content">
            <p class="prizesetting">
              特等奖：
              <el-input
                placeholder="个数"
                v-model="specialaward"
                clearable
                style="width: 72px;"
                size="mini">
              </el-input>
            </p>
          </div></el-col>
          <el-col :span="5"><div class="grid-content">
            <p class="prizesetting">
              一等奖：
              <el-input
                placeholder="个数"
                v-model="firstprize"
                clearable
                style="width: 72px;"
                size="mini">
              </el-input>
            </p>
          </div></el-col>
          <el-col :span="5"><div class="grid-content">
            <p class="prizesetting">
              二等奖：
              <el-input
                placeholder="个数"
                v-model="secondprize"
                clearable
                style="width: 72px;"
                size="mini">
              </el-input>
            </p>
          </div></el-col>
          <el-col :span="5"><div class="grid-content">
            <p class="prizesetting">
              三等奖：
              <el-input
                placeholder="个数"
                v-model="thirdprize"
                clearable
                style="width: 72px;"
                size="mini">
              </el-input>
            </p>
          </div></el-col>
            <el-col style="margin-top:10px;">
              <el-button size="small" type="primary" @click="prizesetting">提交</el-button>
              <el-button size="small" @click="prizereset">重置</el-button>
            </el-col>
        </el-row>
      </div>
      <p class="box-card">
        <span class="tip">抽奖码列表</span>
        <el-button @click="adduser()" size="mini" type="primary">添加</el-button>
      </p>
      <el-table :data="tableData" stripe height="350px">
        <el-table-column align="center" prop="number" label="序号" width="60"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名"></el-table-column>
        <el-table-column align="center" prop="username" label="用户名"></el-table-column>
        <el-table-column align="center" prop="raffle_code" label="抽奖码"></el-table-column>
        <el-table-column align="center" prop="raffle_result" label="抽奖结果"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="8"
          layout="prev, pager, next, jumper"
          :total="totalnum"
          background>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"

export default {
  name: "AdminRaffle",
  data() {
    return {
      specialaward: '',
      firstprize: '',
      secondprize: '',
      thirdprize: '',
      tableData: [
        {
          number: "1",
          name: "王小虎",
          username: "忠门镇忠门村",
          raffle_code: "1234567890",
          raffle_result: "特等奖"
        },
        {
          number: "2",
          name: "王小虎",
          username: "忠门镇忠门村",
          raffle_code: "1234567890",
          raffle_result: "特等奖"
        }
      ],
      currentPage3: 1,
      totalnum: 300
    };
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
    prizesetting: function() {

    },
    prizereset: function() {
      this.specialaward="";
      this.firstprize="";
      this.secondprize="";
      this.thirdprize="";
    },
    adduser: function() {

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
  font-size: 14px;
  background-color: #f4f4f4;
}

.box-card {
  padding: 7px 20px;
  margin: 15px 0;
  border-radius: 3px;
  font-size: 14px;
  text-align: right;
  background: #fff;
}

.tip {
  float: left;
  line-height: 28px;
}

.box-card1 {
  margin-bottom: 15px;
}

.prize-setting {
  padding: 11px 20px;
  margin-bottom: 15px;
  border-radius: 3px;
  font-size: 14px;
  background-color: #fff;
}

.grid-content {
  background-color: transparent;
}

.prizesetting {
  /* text-align: center; */
  line-height: 36px;
}

.p-head {
  font-weight: bold;
  color: #909399;
  border-bottom: 1px solid #EBEEF5;
}

.block {
  margin: 20px auto;
  text-align: center;
}
</style>
