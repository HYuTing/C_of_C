<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'6'"></MyNav>
    <div class="container">
      <div class="content1">
        <el-button @click="onDelete()" class="btn" type="danger">删除记录</el-button>
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
.content1 {
  width: 1200px;
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
