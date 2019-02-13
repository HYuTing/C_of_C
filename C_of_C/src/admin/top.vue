<template>
  <div class="top">
    <span>莆田忠门籍在榕乡亲通讯平台</span>
    <div class="top2">
      欢迎您 {{username}}<span class="text2">|</span><span class="quit">退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTop",
  data() {
    return {
      username:"西二在线",
    };
  }
};
</script>

<style scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  line-height: 54px;
  padding: 0 24px;
  box-shadow: 0 0 8px #EBEEF5;
  font-size: 18px;
  text-align: left;
  background: #fff;
  z-index: 99;
}

.top2{
  position: fixed;
  top: 0;
  right: 24px;
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  font-weight: normal;
}

.text2{
  margin: 0 15px;
  color: #DCDFE6;
}
.quit:hover{
  cursor: pointer;
  color: #409EFF;
}

</style>
