<template>
  <div class="main">
    <div class="header">
      <p class="return" @click="reback()">&lt; 返回</p>
      <p class="title">莆田忠门籍在榕乡亲捐款排行榜</p>
    </div>
    <div class="result-div">
      <div class="ranking-list">
        <p class="town-name">山亭镇</p>
        <div class="topthree">
          <div class="fst">
            <img src="../assets/fst2.png" class="fst-icon">
            <p class="fst-name">黄乐兴</p>
            <p>1000000.00</p>
          </div>
          <div class="fst">
            <img src="../assets/fst1.png" class="fst-icon">
            <p class="first-name">黄乐兴</p>
            <p>1000000.00</p>
          </div>
          <div class="fst">
            <img src="../assets/fst3.png" class="fst-icon">
            <p class="fst-name">黄乐兴</p>
            <p>1000000.00</p>
          </div>
        </div>
        <div class="others">
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
          <p class="list">4<span class="name">黄乐兴</span><span class="num">1000000.00 元</span></p>
        </div>
      </div>
      <div class="ranking-list">
        <p class="town-name">忠门镇</p>

      </div>
      <div class="ranking-list">
        <p class="town-name">东埔镇</p>

      </div>
      <div class="ranking-list">
        <p class="town-name">月塘镇</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminRanking",
  data() {
    return {

    };
  },
  created() {

  },
  methods: {
    reback: function(){
      this.$router.push("/admin/payment_management");
    }
  }
};
</script>
<style scoped>
.main {
  position: relative;
  width: 100%;
  min-width: 1360px;
  height: 100%;
  font-size: 16px;
  color: #ffeecc;
  background-color: #b81d25;
}

.header {
  padding-top: 40px;
}

.return {
  position: absolute;
  top: 44px;
  left: 64px;
  z-index: 99;
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 32px;
  letter-spacing: 2px;
}

.result-div {
  display: flex;
  height: 87%;
  padding: 0 20px;
  background-color: #b81d25;
}

.ranking-list {
  position: relative;
  flex: 1;
  margin: 30px 8px;
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  text-align: center;
  background: #b81d25;
}

.town-name {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 12px auto;
}

.topthree {
  display: flex;
  margin-bottom: 20px;
}

.fst {
  flex: 1;
  height: 100%;
  margin: 0 10px;
  font-weight: bold;
}

.fst-icon {
  width: 50px;
}

.fst-name {
  margin-top: 7px;
  margin-bottom: 10px;
  font-size: 20px;
  letter-spacing: 1px;
}

.first-name {
  margin-top: 2px;
  margin-bottom: 10px;
  font-size: 20px;
}

.others {
  position:absolute;
  top: 180px;
  bottom: 10px;
  left: 0;
  right: 0;
}

.list {
  height: 7.1%;
  text-align: left;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

.name {
  margin: 0 20px;
  margin-right: 30px;
}
</style>
