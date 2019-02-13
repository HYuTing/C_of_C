<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'1'"></MyNav>
    <div class="container">
      <div class="top">
        <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入姓名"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-btn">搜索</el-button>
      </div>
      <p class="box-card">用户列表</p>
      <!-- <template class="table0">
        <el-table :data="tableData3">
          <el-table-column prop="number" label="序号" width="50"></el-table-column>
          <el-table-column prop="name" label="姓名" width="90"></el-table-column>
          <el-table-column prop="tele" label="手机号" width="120"></el-table-column>
          <el-table-column prop="qq" label="qq号" width="120"></el-table-column>
          <el-table-column prop="career" label="职业" width="100"></el-table-column>
          <el-table-column prop="native_place" label="原籍" width="150"></el-table-column>
          <el-table-column prop="working_place" label="单位" width="150"></el-table-column>
          <el-table-column prop="address" label="地址" width="150"></el-table-column>
          <el-table-column prop="username" label="用户名" width="150"></el-table-column>
          <el-table-column prop="password" label="密码" width="100"></el-table-column>
          <el-table-column prop="delete" label="" width="80"></el-table-column>
        </el-table>
      </template> -->
      <template>
        <el-table
          :data="tableData4"
          style="width: 100%"
          stripe
          >
          <el-table-column
            prop="number"
            label="序号"
            width="50"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="90"
            align="center">
          </el-table-column>
          <el-table-column
            prop="tel"
            label="手机号"
            width="120"
            align="center">
          </el-table-column>
          <el-table-column
            prop="QQ"
            label="QQ"
            width="120"
            align="center">
          </el-table-column>
          <el-table-column
            prop="wechat"
            label="微信"
            width="120"
            align="center">
          </el-table-column>
          <el-table-column
            prop="career"
            label="职业"
            width="120"
            align="center">
          </el-table-column>
          <el-table-column
            prop="native_place"
            label="原籍"
            width="120"
            align="center">
          </el-table-column>
          <el-table-column
            prop="working_place"
            label="单位"
            width="120"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="200"
            align="center">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            width="120"
            align="center">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="密码"
            width="70"
            align="center">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData3)"
                type="text"
                size="small">
                修改
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"

export default {
  name: 'AdminUser',
  data () {
    return {
      input: '',
      tableData4: [
        {
          number: "1",
          name: "官道达打",
          tel: "12345678990",
          QQ: "1234567890",
          wechat: "sddasdasasd",
          career: "董事长或退休",
          native_place: "福建省福州市",
          working_place: "达达集团",
          address: "福建省福州市*****",
          username: "guan123",
          delete: <el-button type="danger" icon="el-icon-delete" circle />
        },
        {
          number: "1",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",
          delete: <el-button type="danger" icon="el-icon-delete" circle />
        },
        {
          number: "1",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",
          delete: <el-button type="danger" icon="el-icon-delete" circle />
        },
        {
          number: "1",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",
          delete: <el-button type="danger" icon="el-icon-delete" circle />
        },
        {
          number: "1",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",
          delete: <el-button type="danger" icon="el-icon-delete" circle />
        },
        {
          number: "1",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",
          delete: <el-button type="danger" icon="el-icon-delete" circle />
        },
        {
          number: "1",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",
          delete: <el-button type="danger" icon="el-icon-delete" circle />
        },
        {
          number: "1",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",
          delete: <el-button type="danger" icon="el-icon-delete" circle />
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
  padding: 70px 20px;
  padding-left: 220px;
  text-align: left;
}

.top {
  position: relative;
  padding-right: 100px;
}

.search-btn {
  position: absolute;
  top: 0;
  right: 0;
}

.box-card {
  line-height: 24px;
  padding: 10px 20px;
  margin: 15px 0;
  border-radius: 2px;
  font-size: 14px;
  background: #fff;
}
</style>
