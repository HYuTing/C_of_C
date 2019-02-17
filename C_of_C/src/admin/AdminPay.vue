<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'2'"></MyNav>
    <div class="container">
      <div class="container-left">
        <div class="search-div">
          <el-select style="width:180px;" v-model="value" placeholder="选择排序方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入姓名"></el-input>
          <el-button type="primary" icon="el-icon-search" class="search-btn">搜索</el-button>
        </div>
        <p class="box-card1"><span>付款用户列表</span></p>
        <el-table
        :data="tableData"
        stripe
        style="width: 100%;"
        height="445">
          <el-table-column align="center" prop="number" label="序号" width="60"></el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="90"></el-table-column>
          <el-table-column align="center" prop="native_place" label="原籍" width="120"></el-table-column>
          <el-table-column align="center" prop="money" label="金额 (元)"></el-table-column>
          <el-table-column align="center" prop="modify" label="操作" width="120"></el-table-column>
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

      <div class="container-right">
        <div class="opera-div">
          <el-button type="primary" plain>新增付款</el-button>
          <el-button type="success" plain style="position: absolute; right: 0;">生成排行榜</el-button>
        </div>
        <div v-for="(item, index) in countList" v-bind:key="index" class="box-card2">
          <span>{{item.name}}</span>
          <div class="rule"></div>
          <h4>总金额：{{item.money}}元</h4>
          <h4>总人数：{{item.people}}人</h4>
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
      value: '',
      input: '',
      tableData: [
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
        }
      ],
      currentPage3: 1,
      totalnum: 300,
      countList: [
        {
          name: '忠门籍',
          money: 100000,
          people: 1000
        },
        {
          name: '山亭镇',
          money: 10000,
          people: 1000
        },
        {
          name: '忠门镇',
          money: 9000,
          people: 1000
        },
        {
          name: '东浦镇',
          money: 9000,
          people: 1000
        },
        {
          name: '月塘镇',
          money: 8000,
          people: 999
        }
      ]
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

.container {
  display: flex;
  padding-top: 70px;
  padding-left: 220px;
  text-align: left;
  background-color: #f4f4f4;
}

.container-left{
  flex: 1 1 auto;
  width: 100%;
  min-width: 600px;
}

.search-div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
}

.search-btn {
  margin-left: 15px;
}

.box-card1 {
  line-height: 24px;
  padding: 10px 20px;
  margin: 15px 0;
  border-radius: 2px;
  font-size: 14px;
  background: #fff;
}

.block {
  margin: 20px auto;
  text-align: center;
}
/* .bottom {
  margin: 10px 0 10px;
  height: 40px;
  width: 1001px;
}

.payment2 h4{
  font-weight: 400;
  display: block;
  margin: 0 auto 10px;
} */

.box-card3 {
  line-height: 24px;
  padding: 10px 20px;
  margin: 15px 0;
  border-radius: 2px;
  font-size: 14px;
  background: #fff;
}

.container-right{
  width: 224px;
  margin: 0 20px;
}

.opera-div {
  position: relative;
}

.box-card2{
  width: 200px;
  height: 96px;
  padding: 10px 12px;
  margin: 15px 0;
  border-radius: 3px;
  font-size: 14px;
  background-color: #fff;
}

.box-card2 span{
  display: block;
  font-weight: bold;
  padding-left: 5px;
  margin-bottom: 10px;
}

.rule{
  margin: 10px auto;
  height: 0px;
  width: 200px;
  border-bottom: 1px solid #BBBBBB;
}

.box-card2 h4 {
  font-size: 15px;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 7px;
  font-size: 14px;
}
</style>
