<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'1'"></MyNav>
    <div class="container">
      <div class="search-div">
        <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入姓名"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-btn">搜索</el-button>
      </div>
      <p class="box-card">用户列表</p>
      <el-table
        :data="tableData4"
        style="width: 100%"
        stripe
        height="445">
        <el-table-column
          prop="number"
          label="序号"
          width="60"
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
          label="操作"
          min-width="150"
          align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="text"
              size="small">
              修改密码
            </el-button>
            <el-button
              @click="handleDelete(scope.$index, scope.row)"
              type="text"
              size="small">
              <span class="delete-btn">删除</span>
            </el-button>
          </template>
        </el-table-column>
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
import MyTop from "./top.vue";
import MyNav from "./nav.vue";

export default {
  name: "AdminUser",
  data() {
    return {
      input: "",
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

        },
        {
          number: "2",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",

        },
        {
          number: "3",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",

        },
        {
          number: "4",
          name: "王小虎",
          tel: "1234567890",
          QQ: "1234567890",
          career: "公务员",
          native_place: "忠门镇忠门村",
          working_place: "阿里巴巴",
          address: "福建省福州市*****",
          username: "wang123",

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
    handleClick(row) {
      console.log(row);

      this.$prompt("您正在为用户 " + row.name + " 修改密码：", "修改密码", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          // value值就是input的value

          this.axios({
            url: this.baseUrl + '/user/changePass',
            // url: '/api/',
            method: 'post',
            headers: {
              "S-TOKEN": this.$cookies.get('token')
            },
            data:{
              "userId": row.number,
              "userPass": value,
            }
          })
          .then(function(res) {
            console.log(res);
          })
          .catch(function(error) {
            console.log(error);
          });

          this.$message({
            type: "success",
            message: "修改成功！"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    handleDelete(index, row) {
      console.log(index, row);

      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {

          this.axios({
            url:  this.baseUrl + '/user/delete',
            // url: '/api/',
            method: 'post',
            headers: {
              "S-TOKEN": this.$cookies.get('token')
            },
            data:{
              "userId": row.number,
            }
          })
          .then(function(res) {
            console.log(res);
          })
          .catch(function(error) {
            console.log(error);
          });

          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
  min-width: 600px;
  padding: 70px 20px;
  padding-left: 220px;
  padding-bottom: 20px;
  text-align: left;
  background-color: #f4f4f4;
}

.search-div {
  position: relative;
  padding-right: 100px;
}

.search-btn {
  position: absolute;
  top: 0;
  right: 0;
}

.box-card {
  padding: 11px 20px;
  margin: 15px 0;
  border-radius: 3px;
  font-size: 14px;
  background: #fff;
}

.block {
  margin: 20px auto;
  text-align: center;
}

.delete-btn {
  margin-left: 10px;
  color: #f56c6c;
}
</style>
