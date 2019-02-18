<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'6'"></MyNav>
    <div class="container">
      <div class="content1">
        <el-button @click="Delete()" class="btn" type="danger">删除记录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"

export default {
  name: "AdminDelete",
  data() {
    return {
      labelPosition:"right",
      form: {
          name: '',
          region: '',
          desc: ''
        }
    };
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
      Delete() {
      console.log("delete");

      this.$confirm("此操作将永久删除记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
          this.axios({
            url:  this.baseUrl + '/record/delete',
            method: 'get',
            headers: {
              "S-TOKEN": this.$cookies.get('token')
            },
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
.content1 {
  margin: 20px 0;
  height: 400px;
  padding: 40px 15px;
  background-color: #fff;
}
.btn {
  display: block;
  margin: 100px auto;
  width: 250px;
  height: 100px;
  font-size: 30px;
}
</style>
