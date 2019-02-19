<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'5'"></MyNav>
    <div class="container">
      <div class="message-div">
        <el-form :label-position="labelPosition" ref="form" :model="form" label-width="50px">
          <el-form-item style="text-align:left;" label="主题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="正文">
            <el-input type="textarea" :rows="15" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit()">发布</el-button>
            <el-button @click="reset()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"

export default {
  name: "AdminMessage",
  data() {
    return {
      labelPosition:"right",
      form: {
          name: '',
          desc: ''
        }
    };
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
    onSubmit() {
      this.$message({
        message: '发布成功',
        type: 'success'
      });
    },
    reset() {

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

.message-div {
  padding: 30px 25px 15px 15px;
  border-radius: 3px;
  background-color: #fff;
}
</style>
