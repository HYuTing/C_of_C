<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'4-1'"></MyNav>
      <div class="container">
        <div class="content1">
            <p class="box-card1">
              <span>抽奖码列表</span><el-button @click="add1()" size="small" type="primary">添加</el-button>
            </p>
            <div class="bottom_content">
              <el-table :data="tableData" stripe  height="350px">
              <el-table-column align="center" prop="number" label="序号" width="100px"></el-table-column>
              <el-table-column align="center" prop="name" label="姓名"></el-table-column>
              <el-table-column align="center" prop="username" label="用户名"></el-table-column>
              <el-table-column align="center" prop="raffle_code" label="抽奖码"></el-table-column>
              <el-table-column align="center" prop="raffle_result" label="抽奖结果"></el-table-column>
              </el-table>
            </div>
        </div>
        <div class="content1">
            <p class="box-card">
              <span>奖品设定</span>
            </p>
            <div class="bottom_content">
              <el-table :data="tableData" height="47px">
                <el-table-column align="center" label="等级" width="280px"></el-table-column>
                <el-table-column align="center" label="数量" width="300px"></el-table-column>
                <el-table-column align="center" label="等级" width="280px"></el-table-column>
                <el-table-column align="center" label="数量" width="300px"></el-table-column>
              </el-table>
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <div class="form">
                <el-form-item class="form_item"  label="特等奖">
                  <el-input class="input" v-model="formLabelAlign.te" ></el-input>
                </el-form-item>
                <el-form-item class="form_item"  label="一等奖">
                  <el-input class="input" v-model="formLabelAlign.first" ></el-input>
                </el-form-item>
                </div>
                <div class="form">
                <el-form-item class="form_item"  label="二等奖">
                  <el-input class="input" v-model="formLabelAlign.second" ></el-input>
                </el-form-item>
                <el-form-item class="form_item"  label="三等奖">
                  <el-input class="input" v-model="formLabelAlign.third" ></el-input>
                </el-form-item>
                </div>
                <el-form-item style="margin-bottom:10px;display:flex;justify-content:center">
                  <el-button style="margin:-100px;" type="primary" @click="onSubmit('formLabelAlign')">保存</el-button>
                </el-form-item>
              </el-form>
            </div>
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
      labelPosition: "left",
      formLabelAlign: {
        te: "",
        first: "",
        second: "",
        thrid: ""
      }
    };
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
      onDelete() {
        alert(this.url);
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
  background-color: #f4f4f4;
}
.box-card1 {
  padding: 6px 20px;
  margin: 0px 0 15px;
  border-radius: 3px;
  font-size: 14px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-card {
  padding: 13px 20px;
  margin: 15px 0;
  border-radius: 3px;
  font-size: 14px;
  background: #fff;
}
.bottom_content {
  width: 100%;
  margin: 2px 0 0px;
  padding: 1px 0px 1px;
  background-color: #fff;
}

.bottom_content1 {
  width: 900px;
  height: 30px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
.bottom_content2 {
  width: 250px;
  display: flex;
  justify-content: space-between;
}
.bottom_content3 {
  display: flex;
  margin: 20px 10px 200px;
  justify-content: space-around;
}
.bottom_content4 {
  display: inline-block;
}
.bottom_content4_title {
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  margin: 10px;
}
font {
  font-weight: 200px;
}
.bottom_btn {
  display: block;
  margin: 20px auto;
}
.form {
  display: flex;
  justify-content: flex-start;
  margin: 10px 0px;
}
.form_item {
  margin-bottom: 0px;
  margin-left: 120px;
  display: flex;
  justify-content: flex-start;
  width: 460px;
}
.input {
  margin-left: 100px;
  width: 100px;
}
</style>
