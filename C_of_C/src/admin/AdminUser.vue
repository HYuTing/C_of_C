<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'1'"></MyNav>
    <div class="container">
      <div class="search-div">
        <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入姓名"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="Search()" class="search-btn">搜索</el-button>
      </div>
      <p class="box-card">用户列表</p>
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        height="504">
        <el-table-column
          type="index"
          :index="indexMethod"
          label="序号"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="用户名"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoName"
          label="姓名"
          width="90"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoPhone"
          label="手机号"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoTown"
          label="镇"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoVillage"
          label="村"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoQQ"
          label="QQ"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoWechat"
          label="微信"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoOccupation"
          label="职业"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoUnit"
          label="单位"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="userInfoAddress"
          label="地址"
          width="200"
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
              @click="handleDelete(scope.$index, tableData)"
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
          :current-page.sync="curPageNum"
          :page-size="pageSize"
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
      tableData: [],
      curPageNum: 1,
      totalnum: 0,
      pageSize: 8
    };
  },
  components: {
    MyTop,
    MyNav
  },
  created() {
    this.axios({
      url: this.baseUrl + "/user/search",
      method: "post",
      data: {
        pageNum: this.curPageNum,
        pageSize: this.pageSize,
        userInfoName: ''
      }
    })
      .then(res => {
        // console.log(res.data);
        this.tableData = res.data.data.userVOList;
        this.totalnum = res.data.data.maxPageNum * this.pageSize;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    indexMethod(index) {
      return (this.curPageNum-1)*this.pageSize + index + 1;
    },

    Search() {
      this.axios({
        url: this.baseUrl + "/user/search",
        method: "post",
        data: {
          pageNum: 1,
          pageSize: this.pageSize,
          userInfoName: this.input
        }
      })
      .then(res => {
        console.log(res.data);
        this.tableData = res.data.data.userVOList;
        this.totalnum = res.data.data.maxPageNum * this.pageSize;
      })
      .catch(error => {
        console.log(error);
      });
    },

    handleClick(row) {
      console.log(row);

      this.$prompt(
        "您正在为用户 " + row.userName + " 修改密码：",
        "修改密码",
        {
          inputPlaceholder: "新密码",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        }
      )
        .then(({ value }) => {
          this.axios({
            url: this.baseUrl + "/user/changePass",
            method: "post",
            data: {
              userId: row.userId,
              userPass: value
            }
          })
          .then(function(res) {
            console.log(res);
            this.$message({
              type: "success",
              message: "修改成功！"
            });
          })
          .catch(function(error) {
            console.log(error);
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
      var _this = this;
      // console.log(row.length);

      this.$confirm("此操作将永久删除该用户 "+ row[index].userName +", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
        if(this.curPageNum === 1 && row.length === 1) {
          this.tableData = [];
        }
        else {
          if(this.curPageNum > 1 &&row.length === 1) {
            this.curPageNum -= 1;
          }
          this.axios({
            url: this.baseUrl + "/user/delete?userId="+row[index].userId,
            method: "post",
          })
          .then(function(res) {

            _this.axios({
              url: _this.baseUrl + "/user/search",
              method: "post",
              data: {
                pageNum: _this.curPageNum,
                pageSize: _this.pageSize,
                userInfoName: _this.input
              }
            })
            .then(res => {
              console.log(res.data);

              _this.tableData = res.data.data.userVOList;
              _this.totalnum = res.data.data.maxPageNum * _this.pageSize;
            })
            .catch(error => {
              console.log(error);
            });

            _this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(function(error) {
            console.log(error);
          });
        }
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
      this.curPageNum = val;
      this.axios({
        url: this.baseUrl + "/user/search",
        method: "post",
        data: {
          pageNum: this.curPageNum,
          pageSize: this.pageSize,
          userInfoName: this.input
        }
      })
      .then(res => {
        console.log(res.data);

        this.tableData = res.data.data.userVOList;
        this.totalnum = res.data.data.maxPageNum * this.pageSize;
      })
      .catch(error => {
        console.log(error);
      });
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
  margin: 15px auto;
  text-align: center;
}

.delete-btn {
  margin-left: 10px;
  color: #f56c6c;
}
</style>
