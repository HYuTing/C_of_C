<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'2'"></MyNav>
    <div class="container">
      <div class="payment1">
        <div class="top1">
        <template>
          <el-select style="width:150px" v-model="value" placeholder="请选择排序方式">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
          </el-select>
          </template>
          <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入姓名"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <p class="box-card1"><span>添加付款用户</span><el-button size="small" type="primary">添加</el-button></p>
          <el-table
        :data="tableData4"
        stripe
        style="width: 100%"
        height="405px">
          <el-table-column align="center" prop="number" label="序号" width="100px"></el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="270px"></el-table-column>
          <el-table-column align="center" prop="native_place" label="原籍" width="300px"></el-table-column>
          <el-table-column align="center" prop="money" label="金额 (元)" width="250px"></el-table-column>
          <el-table-column align="center" prop="modify" label="操作" width="80px"></el-table-column>
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
        <div class="bottom">
          <p class="box-card1"><span>生成排行榜</span><el-button size="small" type="primary">生成</el-button></p>
        </div>
      </div>
      <div class="payment2">
        <div class="box-card2">
          <span>忠门籍</span>
          <div class="rule"></div>
          <h4>总金额：{{ money }}元</h4>
          <h4>总人数：{{ people }}人</h4>
        </div>
        <div class="box-card2">
          <span>山亭</span>
          <div class="rule"></div>
          <h4>总金额：{{ money }}元</h4>
          <h4>总人数：{{ people }}人</h4>
        </div>
        <div class="box-card2">
          <span>忠门</span>
          <div class="rule"></div>
          <h4>总金额：{{ money }}元</h4>
          <h4>总人数：{{ people }}人</h4>
        </div>
        <div class="box-card2">
          <span>东浦</span>
          <div class="rule"></div>
          <h4>总金额：{{ money }}元</h4>
          <h4>总人数：{{ people }}人</h4>
        </div>
        <div class="box-card2">
          <span>月塘</span>
          <div class="rule"></div>
          <h4>总金额：{{ money }}元</h4>
          <h4>总人数：{{ people }}人</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"

export default {
  name: 'AdminPay',
  data () {
    return {
      money:"100000",
      people:"1000",
      options: [
        {
          value: "选项1",
          label: "山亭"
        },
        {
          value: "选项2",
          label: "忠门"
        },
        {
          value: "选项3",
          label: "东浦"
        },
        {
          value: "选项4",
          label: "月塘"
        }
      ],
      value: "山亭",
      input: "",
      tableData4: [
        {
          number: "1",
          name: "王小虎",
          native_place: "忠门镇忠门村",
          money:"1000",
          modify:<el-button icon="el-icon-edit"></el-button>
        },
        {
          number: "2",
          name: "王小虎",
          native_place: "忠门镇忠门村",
          money:"1000",
          modify:<el-button icon="el-icon-edit"></el-button>
        },
      ],
      currentPage3: 1,
      totalnum: 300
    }
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
    Login: function() {

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}
.block {
  margin: 20px auto;
  text-align: center;
}

.container {
  padding-top: 70px;
  padding-left: 220px;
  text-align: left;
  display: flex;
}
.payment{
  display: flex;
}
.payment2{
  margin: 0 20px;
}
.top1 {
  margin: 0 0 10px;
  height: 40px;
  width: 1001px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.bottom {
  margin: 10px 0 10px;
  height: 40px;
  width: 1001px;
}

.payment2 span{
  font-weight: 700;
  display: block;
  padding-left: 5px;
  margin: 0 auto 10px;
}
.payment2 h4{
  font-weight: 400;
  display: block;
  margin: 0 auto 10px;
}

.box-card2{
  font-size: 15px;
  margin: 0 10px 10px;
  background-color: #fff;
  padding: 10px;
  width: 200px;
  height: 100px;
}
.box-card1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
  padding: 6px 20px;
  margin: 15px 0;
  border-radius: 2px;
  font-size: 14px;
  background: #fff;
}
.box-card3 {
  line-height: 24px;
  padding: 10px 20px;
  margin: 15px 0;
  border-radius: 2px;
  font-size: 14px;
  background: #fff;
}
.rule{
  margin: 10px auto;
  height: 0px;
  width: 200px;
  border-bottom: 1px solid #BBBBBB;
}

</style>
