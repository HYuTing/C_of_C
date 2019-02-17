<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'5'"></MyNav>
    <div class="container">
      <div class="content1">
        <el-form :label-position="labelPosition" ref="form" :model="form" label-width="50px">
          <el-form-item style="text-align:left;" label="主题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="正文">
            <el-input type="textarea" :rows="15" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">发送</el-button>
            <el-button>取消</el-button>
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
  name: "content",
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
      onSubmit() {
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
.content1 {
  margin: 20px 0;
  width: 1200px;
  padding: 40px 15px;
  background-color: #fff;
}
</style>
